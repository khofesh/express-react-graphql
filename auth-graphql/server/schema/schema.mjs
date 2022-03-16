import { GraphQLSchema } from "graphql";

const RootQueryType = require("./types/root_query_type");
const mutation = require("./mutations.mjs");

export default new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
