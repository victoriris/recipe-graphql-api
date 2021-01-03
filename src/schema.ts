import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import * as types from "./resolvers";

export const schema = makeSchema({
	types,
	plugins: [
		nexusPrisma({ experimentalCRUD: true, paginationStrategy: "prisma" }),
	],
	outputs: {
		schema: __dirname + "/../schema.graphql",
		typegen: __dirname + "/generated/nexus.ts",
	},
	contextType: {
		module: require.resolve("./context"),
		alias: "Context",
		export: "Context",
	},
	sourceTypes: {
		modules: [
			{
				module: "@prisma/client",
				alias: "client",
			},
		],
	},
	nonNullDefaults: {
		output: true,
	},
});
