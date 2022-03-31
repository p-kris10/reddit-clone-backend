import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,BaseEntity, ManyToOne, PrimaryColumn} from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";
import { User } from './User';
import { Post } from './Post';

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column()
  postId : number;

  @Field()
  @Column()
  creatorId : number;

  @Field(()=>User)
  @ManyToOne(() => User, user => user.comments)
  creator: User;

  @Field(()=>Post)
  @ManyToOne(() => Post, post => post.comments,{onDelete : "CASCADE"})
  post: Post;

}