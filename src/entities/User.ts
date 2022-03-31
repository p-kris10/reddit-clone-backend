import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,BaseEntity, OneToMany} from 'typeorm'
import { Field, Int, ObjectType } from "type-graphql";
import { Post } from './Post';
import { Updoot } from './Updoot';
import { Comment } from './Comment';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(()=> String)
  @Column({unique: true })
  username!: string;

  @Field(()=> String)
  @Column({unique: true })
  email!: string;

  @OneToMany(() => Post, post => post.creator)
  posts: Post[];

  @OneToMany(() => Updoot, updoot => updoot.user)
  updoots : Updoot[];
  
  //added
  @OneToMany(() => Comment, comment => comment.creator)
  comments : Comment[];

  @Column()
  password: string;

  @Field(()=> String)
  @CreateDateColumn()
  createdAt?: Date;

  @Field(()=> String)
  @UpdateDateColumn()
  updatedAt?: Date;


}