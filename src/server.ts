import { GraphQLServer, Options } from "graphql-yoga";
import { createContext } from "./context";
import { schema } from "./schema";

const options: Options = {
	port: process.env.PORT || 4000,
	endpoint: "/",
	playground: "/playground",
};

const server = new GraphQLServer({
	schema,
	context: (ctx) => createContext(ctx),
});

server.start(options, ({ port, endpoint }) => {
	console.log(`🚀 Server ready at http://localhost:${port}${endpoint}`);
	
	// Terminate app if needed
	process.on("SIGTERM", () => process.exit());
});
