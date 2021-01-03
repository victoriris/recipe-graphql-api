import { objectType } from "nexus";

export const Ingredient = objectType({
	name: "Ingredient",
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.recipes();
	},
});
