import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} from "graphql";
import axios from "axios";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      async resolve(parentValue, args) {
        const res = await axios.get(
          `http://localhost:3000/companies/${parentValue.id}/users`
        );
        return res.data;
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      async resolve(parentValue, args) {
        const res = await axios.get(
          `http://localhost:3000/companies/${parentValue.companyId}`
        );
        return res.data;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
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
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      async resolve(parentValue, args) {
        const res = await axios.get(
          `http://localhost:3000/companies/${args.id}`
        );

        return res.data;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
