import { PrismaClient } from "@prisma/client";
import { ContextParameters } from "graphql-yoga/dist/types";
import { prisma } from "./clients";

export interface Context {
	prisma: PrismaClient;
	request: any;
	response: any;
}

export function createContext(request: ContextParameters) {
	return {
		...request,
		prisma,
	};
}
