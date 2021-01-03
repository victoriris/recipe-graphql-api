import { objectType } from "nexus";

export const Recipe = objectType({
	name: "Recipe",
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.content();
		t.model.ingredients();
		t.model.ratings();
		t.model.updatedAt();
		t.model.createdAt();
	},
});
