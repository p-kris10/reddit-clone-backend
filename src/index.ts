import { MikroORM } from "@mikro-orm/core";
import { COOKIE_NAME, __prod__ } from "./constants";
import "reflect-metadata";
import { Post } from "./entities/Post";
import express from 'express';
import microConfig from "./mikro-orm.config";
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import session from "express-session";
import connectRedis from 'connect-redis';
import { createClient }from 'redis';
import { MyContext } from "./types";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import cors from 'cors'
import {sendEmail} from "./utils/sendEmail"
import { User } from "./entities/User";
const main = async() =>{
 
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    
    const app = express();
    let RedisStore = connectRedis(session)
    // redis@v4
    let redisClient = createClient({ legacyMode: true })
    redisClient.connect().catch(console.error)

    app.use(cors({
        origin:"http://localhost:3000",
        credentials:true
    }))

    app.use(
        session({
        name : COOKIE_NAME,
        store: new RedisStore({ client: redisClient, 
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
        context: ({req,res}) =>({em : orm.em,req,res})
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
