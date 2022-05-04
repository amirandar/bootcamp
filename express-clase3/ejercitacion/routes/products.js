let products = require("../utils/mock");
const express = require("express");

const router = express.Router();



/*************************************************************** 
	PUNTO 1
	- Retornar todos los productos del array. “/api/products”,
	Utiliza la variable products que se encuentra en este archivo
 ***************************************************************/
// Tu código acá

router.get('/products', (req, res) => {
	res.status(200).json(products);
});



/****************************************************************
	PUNTO 2
	- Obtener un producto específico mediante su ID “/api/products/:id”
*******************************************************************/
// Tu código acá


router.get('/products/:id', (req, res) => {
	let id = req.params.id;
	let productById = products.find(element => element.id === parseInt(id)); 
	res.status(200).json([productById]);
});




/**********************************************************************
	PUNTO 3
	- Agregar un nuevo producto “/api/products”
 ***********************************************************************/
// Tu código acá

router.post('/products/add', (req, res) => {
	let pos = products.push(req.body);
	res.status(200).json(products[pos]);
});




/************************************************************************
	PUNTO 4
	Cambiar alguna propiedad de un producto en particular 
	( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
 **************************************************************************/
// Tu código acá

router.put('/products/:id', (req, res) => {
	const {name, price, quantity} = req.body;
	products.map(element => {
		if (element.id === parseInt(req.params.id)) {
			element.name = name;
			element.price = price;
			element.quantity = quantity;
		}
		return element;
	});
	res.status(200).json(products.find(element => element.id === parseInt(req.params.id)));
});

router.put('/products/:id/:name', (req, res) => {
	const name = req.params.name;
	products.map(element => {
		if (element.id === parseInt(req.params.id)) {
			element.name = name;
		}
		return element;
	});
	res.status(200).json(products.find(element => element.id === parseInt(req.params.id)));
});




/**************************************************************************
	PUNTO 5
	Eliminar un producto mediante su ID “/api/products/:id”,
 ***************************************************************************/
// Tu código acá

router.delete('/products/:id', (req, res) => {
	products.splice(products.findIndex(element => element.id === parseInt(req.params.id)), 1);
	res.status(200).json(products);
});





module.exports = { router, products };
