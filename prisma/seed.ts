import { prisma } from "../src/clients";

async function main() {
	const tacos = await prisma.recipe.create({
		data: {
			name: "tacos de pastor",
			content: `
			1) Get tortilla
			2) Cook some good meat
			3) Prepare the sauce
			4) Serve with onions and cilantro
			`,
			ingredients: {
				create: [
					{
						name: "tortillas",
					},
					{
						name: "carne de pastor",
					},
					{
						name: "red sauce",
					},
					{
						name: "onions",
					},
					{
						name: "cilantro",
					},
				],
			},
			ratings: {
				create: [
					{
						comment: "Viva México!",
						score: 10,
						createdAt: new Date("2020-06-22 10:41:53"),
					},
					{
						comment: "Great recipe",
						score: 10,
						createdAt: new Date("2020-12-25 09:55:11"),
					},
				],
			},
		},
		include: {
			ingredients: true,
		},
	});
	const quesadilla = await prisma.recipe.create({
		data: {
			name: "quesadilla",
			content: `
			1) Put tortilla on the heat
			2) Place some cheese on top
			3) Add some ham
			4) Close quesadilla and serve
			`,
			ingredients: {
				connect: {
					id: tacos.ingredients[0].id,
				},
				create: [{ name: "cheese" }, { name: "ham" }],
			},
			ratings: {
				create: [
					{
						comment: "I love it, tastes great",
						score: 10,
						createdAt: new Date("2020-03-28 00:57:56"),
					},
					{
						comment: "Great! super simple",
						score: 10,
						createdAt: new Date("2020-05-16 03:29:43"),
					},
					{
						comment: "Hmm not vegetarian",
						score: 2,
						createdAt: new Date("2020-06-16 21:17:36"),
					},
				],
			},
		},
	});
}

main().finally(async () => {
	await prisma.$disconnect();
});
