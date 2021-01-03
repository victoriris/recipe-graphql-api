import { objectType } from "nexus";

export const Rating = objectType({
	name: "Rating",
	definition(t) {
		t.model.recipe();
		t.model.comment();
		t.model.score();
		t.model.createdAt();
	},
});
