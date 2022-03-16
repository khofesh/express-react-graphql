import express from "express";
import "./models/index.mjs";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import "./services/auth.mjs";
import MongoStore from "connect-mongo";
import cors from "cors";

import schema from "./schema/schema.mjs";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

const MONGO_URI = "mongodb://localhost/auth";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

async function connectMongo() {
  try {
    mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(error);
  }
}

connectMongo();

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "aaabbbccc",
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
    }),
  })
);

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening");
});
