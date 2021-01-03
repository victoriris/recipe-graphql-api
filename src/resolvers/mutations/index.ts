import { extendType } from "nexus";

export const mutations = extendType({
	type: "Mutation",
	definition(t) {
		t.crud.createOneIngredient({ alias: "createIngredient" });
		t.crud.createOneRating({ alias: "rateRecipe" });
		t.crud.createOneRecipe({ alias: "createRecipe" });
	},
});
