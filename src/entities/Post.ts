import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,BaseEntity, ManyToOne, OneToMany} from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";
import { User } from './User';
import { Updoot } from './Updoot';
import { Comment } from './Comment';

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column({type : "int",default:0})
  points!: number;

  @Field()
  @Column({type : "int",default:0})
  comCount!: number;
  

  @Field(()=> Int,{nullable : true})
  voteStatus : number | null;

  @Field()
  @Column()
  creatorId : number;

  @Field()
  @ManyToOne(() => User, user => user.posts)
  creator: User;
//added
  @OneToMany(() => Comment, comment => comment.post)
  comments : Comment[];

  @OneToMany(() => Updoot, updoot => updoot.post)
  updoots : Updoot[];

  @Field(()=> String)
  @CreateDateColumn()
  createdAt?: Date;

  @Field(()=> String)
  @UpdateDateColumn()
  updatedAt?: Date;



}