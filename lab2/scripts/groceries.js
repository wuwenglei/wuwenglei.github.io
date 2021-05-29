// Modified by Wenglei Wu on May 29, 2021

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "banana",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.50
	},
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "pure chocolate",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.20
	},
	{
		name: "hickory milk",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 2.59
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "ice-cream",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 4.00
	},
	{
		name: "roast chicken",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "milk tea",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "pesto sauce",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.00
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 6.50
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 7.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_prices = [];
	let product_infos = [];
	for (let i=0; i<prods.length; i+=1) {
		if (organic == true) {
			if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "NutFree") && (prods[i].nutFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "None") && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
		} else {
			if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
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
			}
		}
	}
	product_infos.push(product_names);
	product_infos.push(product_prices);
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
