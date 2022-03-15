import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";

import "./models/index.mjs";
import schema from "./schema/schema.mjs";

const app = express();

const MONGO_URI = "mongodb://localhost/lyricaldb";
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
