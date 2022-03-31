import { Arg, Ctx, FieldResolver, Int, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import { Comment } from "../entities/Comment";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";


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

    @Mutation(() => Comment)
    @UseMiddleware(isAuth)
    async commentUpdate(
      @Arg("comId", () => Int) comId: number,
      @Arg("text", () => String) text: string,
      @Ctx() { req }: MyContext
    )
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

      return result.raw[0];

    }

    @Query(() => [Comment],{nullable:true})
    async getComments(
      @Arg("postId", () => Int) postId: number,
      @Ctx() { req }: MyContext
    )
    {
      const comments = await Comment.find({where: {postId}})
      return comments
    }




    
}