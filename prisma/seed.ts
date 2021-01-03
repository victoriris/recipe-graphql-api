import { prisma } from "../src/clients";

async function main() {
	await prisma.recipe.create({
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
						name: "carne de pastor",
					},
					{ 
						name: "tortillas",
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
				]
			}
		}
	})
}

main().finally(async () => {
	await prisma.$disconnect();
});
