/*******************************************************************************

Realizar una función llamada “calculatePrice” que reciba dos parámetros,
el primero siendo el nombre de un producto (ej: "Laptop""), y el segundo 
el precio de ese producto (sin el signo $). Dicha función deberá retornar 
un string con el nombre del producto, el costo del envío del mismo, y el precio final.

Ejemplo:
calculatePrice("play", 30000)

output : "el costo de envio de una play es de 500 pesos y el precio total seria de 30500 pesos"
*******************************************************************************/
//Tu código acá

const calculatePrice = (name, price) => {
	if (name != undefined && price != undefined) {
		if (price < 1)
			return `Error`;
		let shiperPrice = price >= 1 && price <= 2000 ? 300 : price > 2000 && price <= 4000 ? 500 : 700;
		return `El producto ${name} cuesta ${price} . Su costo de envío es de ${shiperPrice} . Por lo tanto, el precio final es de ${price+shiperPrice}`;
	} else {
		return `ingresar ambos parámetros`;
	}
}

module.exports = {
	calculatePrice,
};
