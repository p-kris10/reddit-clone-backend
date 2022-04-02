import { Arg, Ctx, Field, FieldResolver, Int, Mutation, ObjectType, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import { Comment } from "../entities/Comment";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";


@ObjectType()
class CommFieldError{
    @Field()
    field : string;
    @Field()
    message : string;
}


@ObjectType()
class CommResponse{
    @Field(() => [CommFieldError],{nullable : true})
    errors? : CommFieldError[];

    @Field(()=> Comment ,{nullable:true})
    comm? : Comment;
}
//comment resolver
@Resolver(Comment)
export class CommentResolver{
    
    @FieldResolver(()=> String)
    creator(
        @Root() comment: Comment,
        @Ctx() {userLoader} : MyContext
    ){
        console.log(comment.creatorId)
        return userLoader.load(comment.creatorId)
        
    }


    @Mutation(() => Comment)
    @UseMiddleware(isAuth)
    async comment(
      @Arg("postId", () => Int) postId: number,
      @Arg("text", () => String) text: string,
      @Ctx() { req }: MyContext
    )
    {
      return Comment.create({
        text,
        postId,
        creatorId : req.session.userId,
    }).save();

    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteComment(
      @Arg("id", () => Int) id: number,
      @Ctx() { req }: MyContext
    ): Promise<boolean> {
  
      await Comment.delete({ id, creatorId: req.session.userId });
      return true;
    }

    @Mutation(() => CommResponse)
    @UseMiddleware(isAuth)
    async commentUpdate(
      @Arg("comId", () => Int) comId: number,
      @Arg("text", () => String) text: string,
      @Arg("creatorId",()=> Int) creatorId : number,
      @Ctx() { req }: MyContext
    ): Promise<CommResponse>
    {
      if(creatorId === req.session.userId)
      {
        
        const result = await getConnection()
        .createQueryBuilder()
        .update(Comment)
        .set({ text })
        .where('id = :id and "creatorId" = :userId', {
          id : comId,
          userId: req.session.userId,
        })
        .returning("*")
        .execute();
        return  {comm : result.raw[0]};

      }
      return{
        errors : [{

              field:"user",
              message:"user unauthorized to modify comment"

          },]
      };

    }

    @Query(() => [Comment],{nullable:true})
    async comments(
      @Arg("postId", () => Int) postId: number,
      @Ctx() { req }: MyContext
    )
    {
      const comments = await Comment.find({where: {postId} ,order:{id :"DESC"}})
      return comments
    }




    
}