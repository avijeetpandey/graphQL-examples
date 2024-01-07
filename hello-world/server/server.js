const typeDefs = `
   type Query {
     greeting: String
   }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello world",
  },
};
