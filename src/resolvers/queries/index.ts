import { extendType, nullable } from "nexus";

export const queries = extendType({
	type: "Query",
	definition(t) {
		t.crud.recipes();
		t.crud.recipe();
		t.crud.ingredients();
		t.field("bestRecipe", {
			type: nullable("Recipe"),
			description: "Get the best rated recipe",
			resolve: async (parent, args, ctx) => {
				const [bestRecipe] = await ctx.prisma.$queryRaw(`
                SELECT "recipeId", SUM(score) FROM "Rating" as r
                GROUP BY "recipeId" LIMIT 1
                `);

				return ctx.prisma.recipe.findUnique({
					where: {
						id: bestRecipe.recipeId,
					},
				});
			},
		});
	},
});
