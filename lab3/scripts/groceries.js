// Modified by Wenglei Wu on May 29, 2021
// Second modification by Wenglei Wu on June 5, 2021

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "banana",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.50,
		description: "One single American organic banana. Moderately sweet."
	},
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99,
		description: "One single Canadian organic brocoli. Very delicious."
	},
	{
		name: "pure chocolate",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.20,
		description: "Pure chocolate from New Zealand with no lactose and nut."
	},
	{
		name: "hickory milk",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 2.59,
		description: "Chinese hickory milk, which is good for brain health."
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.99,
		description: "Ottawa product. Organic and healthy."
	},
	{
		name: "ice-cream",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 4.00,
		description: "Haagen-Dazs. Flavors available: strawberry, blueberry, vanilla, chocolate, coffee, matcha."
	},
	{
		name: "roast chicken",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 4.99,
		description: "A whole chicken. Organic. Cooked by our founder Stone Wu. Extremely tasty!"
	},
	{
		name: "milk tea",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 5.00,
		description: "One bottle of milk tea produced by our grocery."
	},
	{
		name: "pesto sauce",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.00,
		description: "Imported from Italy."
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.50,
		description: "Imported from USA."
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 7.35,
		description: "Canadian product. Sufficient for at least 10 meals."
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00,
		description: "Fresh Japanese organic salmon. High protein."
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_prices = [];
	let product_descriptions = [];
	let product_infos = [];
	for (let i=0; i<prods.length; i+=1) {
		if (organic == true) {
			if ((restriction == "LactoseAndNutFree") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if ((restriction == "NutFree") && (prods[i].nutFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if ((restriction == "None") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
		} else {
			if ((restriction == "LactoseAndNutFree") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
				product_descriptions.push(prods[i].description);
			}
		}
	}
	for (let i=0; i<product_prices.length-1; i++) {
		for (let j=product_prices.length-1; j>i; j--) {
			if (product_prices[j]<product_prices[j-1]) {
				var tmp_price=product_prices[j];
				product_prices[j]=product_prices[j-1];
				product_prices[j-1]=tmp_price;
				var tmp_name=product_names[j];
				product_names[j]=product_names[j-1];
				product_names[j-1]=tmp_name;
				var tmp_description=product_descriptions[j];
				product_descriptions[j]=product_descriptions[j-1];
				product_descriptions[j-1]=tmp_description;
			}
		}
	}
	product_infos.push(product_names);
	product_infos.push(product_prices);
	product_infos.push(product_descriptions);
	return product_infos;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return Number(totalPrice).toFixed(2);
}
