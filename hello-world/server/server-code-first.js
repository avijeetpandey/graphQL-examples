// This is implementation of apollo server using code first approach
import { ApolloServer } from "@apollo/server";
import { makeSchema, queryType } from "nexus";
import { startStandaloneServer } from "@apollo/server/standalone";

const Query = queryType({
  definition: (t) => {
    t.string("greeting", {
      resolve: () => "Hello world",
    });
  },
});

const schema = makeSchema({ types: [Query] });

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, { listen: { port: 9001 } });

console.log(`GraphQL server running on  ${url}`);
