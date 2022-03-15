import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} from "graphql";
import axios from "axios";

const UserTypes = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserTypes,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      async resolve(parentValue, args) {
        const resp = await axios.get(`http://localhost:3000/users/${args.id}`);
        return resp.data;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
