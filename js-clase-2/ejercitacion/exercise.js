const {products}= require('../ejercitacion/utils/products');

/************************************************************************************
PUNTO 1
utiliza addingIdToProduct para agregarle un id único a cada producto empezando en 1
*************************************************************************************/
// Tu código acá
let addingIdToProduct = () => {
	products.forEach((obj, ind) => {
		obj.id = ind + 1;
	});
	return products;
};


/* addingIdToProduct(); */


/*****************************************************************************
 * PUNTO 2
 * utiliza returningTheNames para retornar el nombre de cada uno de los productos
 ******************************************************************************/
// Tu código acá
let returningTheNames = () => {
	let names = [];
	products.forEach(obj => {
		names.push(obj.name);
	});
	return names;
};



 

/********************************************************************************
PUNTO 3
utiliza searchID para retornar el producto cuyo id corresponda al parametro pasado.
Si ejecuto searchID(3) debería devolver el objeto entero, cuyo id sea 3
************************************************************************************/
// Tu código acá
let searchID = (_id) => {
	let product = products.find(obj => obj.id === _id);
	return product !== undefined ? product : `no hubo coincidencias`;
};




/*****************************************************************************
PUNTO 4
utiliza matchingColors para retornar los productos que hagan match con 
el color pasado por parámetro
******************************************************************************/
// Tu código acá
let matchingColors = (color) => products.filter(obj => obj.colors.find(c => c === color))
	
	/* let colorProduct = [];
	products.forEach(obj => {
		if (obj.colors.some (element => element === color))
			colorProduct.push(obj);
	});
	if (colorProduct !== undefined)
		return colorProduct;
	return `no hubo coincidencias`; */
;



/*****************************************************************************
PUNTO 5
utiliza colorsLength para retornar los productos que no tengan color
******************************************************************************/
// Tu código acá
let colorsLength = () => {
	return products.filter(obj => obj.colors.length === 0);
};;



/*****************************************************************************
PUNTO 6
utiliza addProduct para agregar un nuevo producto que contenga las mismas
propiedades (name,price,quantity,colors).
Retornar los productos donde se incluya el producto agregado
******************************************************************************/
// Tu código acá
let addProduct = (newObj) => {
	/* let obj = {
		name: newObj.name !== undefined ? newObj.name : "",
		quantity: newObj.quantity !== undefined ? newObj.quantity : 0,
		price: newObj.price !== undefined ? newObj.price : 0,
		colors: newObj.colors !== undefined ? newObj.colors : [],
	}; */
	const {name, quantity, price, colors} = newObj;
	/* if (newObj.name !== undefined && newObj.quantity !== undefined && newObj.price !== undefined && newObj.colors !== undefined)
		products.push(newObj); */
		if (name && quantity && price && colors)
			products.push(newObj);
	return products;
};




/*****************************************************************************
PUNTO 7
utiliza deleteProduct para Eliminar del array de productos a aquellos sin stock (con quantity 0)
******************************************************************************/
// Tu código acá
let deleteProduct = () => {
	return products.filter(obj => obj.quantity !== 0);
};

// deleteProduct();



/*****************************************************************************
PUNTO 8
utiliza existingProducts para sumar el numero total de stock entre todos los productos.
Debe retornar dicho numero
******************************************************************************/
// Tu código acá
let existingProducts = (productRe) => {
	return productRe.reduce((objPrev, objCur) => objPrev + objCur.quantity, 0);
};





/*****************************************************************************
PUNTO 9
utiliza showHigherPrice para retornar los productos cuyo importe sea mayor al pasado por parametro
Esta función recibe el array de productos y el importe (precio) a buscar:
showHigherPrice(products,500) 
debería devolver 2 objetos, ya que solo 2 productos tienen un valor mayor a 500
******************************************************************************/
// Tu código acá
let showHigherPrice = (productsH, price) => {
	return productsH.filter(obj => obj.price > price);
};






module.exports = {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
};