import _ from "lodash";
import { GraphQLSchema } from "graphql";

import RootQueryType from "./root_query_type.mjs";
import mutations from "./mutations.mjs";

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations,
});
