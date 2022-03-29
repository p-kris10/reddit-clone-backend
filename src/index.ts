import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from "express-session";
import Redis from 'ioredis';
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { COOKIE_NAME, __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import path from "path";
const main = async() =>{
//rr
    const conn = await createConnection(
        {
            type: 'postgres',
            database: 'liredit',
            username:"postgres",
            password:'incorrect',
            logging : true,
            synchronize : true,
            migrations:[path.join(__dirname,"./migrations/*")],
            entities :[Post,User]
        }
    );

    await conn.runMigrations();

    // await Post.delete({});
 
   
    const app = express();
    let RedisStore = connectRedis(session)

    let redis = new Redis();

    app.use(cors({
        origin:"http://localhost:3000",
        credentials:true
    }))

    app.use(
        session({
        name : COOKIE_NAME,
        store: new RedisStore({ client: redis, 
            disableTouch: true}),
        cookie : {
            maxAge: 1000 * 60 * 60 * 24 *365 *10, // 10years
            httpOnly:true,
            sameSite:'lax', //csrf
            secure: __prod__
        },
        saveUninitialized : false,
        secret: "keyboard cat",
        resave: false,
        })
    )
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[HelloResolver,PostResolver,UserResolver],
            validate:false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        context: ({req,res}) =>({req,res,redis})
    });

    // added this line
    await apolloServer.start();

    apolloServer.applyMiddleware({app,cors:false});

    app.get('/',(_,res)=>{
        res.send("hello")
    })
    app.listen(4000,()=>{
        console.log("server started on localhost:4000")
    })
    
}

main().catch((err)=>{
    console.log(err);
})
