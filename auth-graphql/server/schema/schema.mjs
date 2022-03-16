import { GraphQLSchema } from "graphql";

import RootQueryType from "./types/root_query_type.mjs";
import mutation from "./mutations.mjs";

export default new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
