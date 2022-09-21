import tradicional from "../assets/coffees/tradicional.png";
import americano from "../assets/coffees/americano.png";
import capuccino from "../assets/coffees/capuccino.png";
import latte from "../assets/coffees/latte.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import cafeComLeite from "../assets/coffees/cafecomleite.png";
import gelado from "../assets/coffees/gelado.png";
import cremoso from "../assets/coffees/cremoso.png";
import macchiato from "../assets/coffees/macchiato.png";
import irlandes from "../assets/coffees/irlandes.png";
import arabe from "../assets/coffees/arabe.png";
import chocolatequente from "../assets/coffees/chocolatequente.png";
import havaiano from "../assets/coffees/havaiano.png";
import cubano from "../assets/coffees/cubano.png";

export const coffees = [
	{
		id: 1,
		tags: ["tradicional"],
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		photo: tradicional,
		price: 9.5,
	},
	{
		id: 2,
		tags: ["tradicional"],
		name: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		photo: americano,
		price: 8.9,
	},
	{
		id: 3,
		tags: ["tradicional"],
		name: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		photo: cremoso,
		price: 9.9,
	},
	{
		id: 4,
		tags: ["tradicional", "gelado"],
		name: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		photo: gelado,
		price: 5.9,
	},
	{
		id: 5,
		tags: ["tradicional", "com leite"],
		name: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		photo: cafeComLeite,
		price: 6.9,
	},
	{
		id: 6,
		tags: ["tradicional", "com leite"],
		name: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa",
		photo: latte,
		price: 9.9,
	},
	{
		id: 7,
		tags: ["tradicional", "com leite"],
		name: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		photo: capuccino,
		price: 4.9,
	},
	{
		id: 8,
		tags: ["tradicional", "com leite"],
		name: "Macchiato",
		description:
			"Café expresso misturado com um pouco de leite quente e espuma",
		photo: macchiato,
		price: 7.9,
	},
	{
		id: 9,
		tags: ["tradicional", "com leite"],
		name: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		photo: mocaccino,
		price: 9.9,
	},
	{
		id: 10,
		tags: ["especial", "com leite"],
		name: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		photo: chocolatequente,
		price: 9.9,
	},
	{
		id: 11,
		tags: ["especial", "alcoólico", "gelado"],
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		photo: cubano,
		price: 8.9,
	},
	{
		id: 12,
		tags: ["especial"],
		name: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		photo: havaiano,
		price: 6.9,
	},
	{
		id: 13,
		tags: ["especial"],
		name: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		photo: arabe,
		price: 9.9,
	},
	{
		id: 14,
		tags: ["especial", "alcoólico"],
		name: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		photo: irlandes,
		price: 9.9,
	},
];