import { extendType } from "nexus";

export const queries = extendType({
    type: "Query",
    definition(t) {
        t.crud.recipes();
        t.crud.recipe();
        t.crud.ingredients();
    }
})