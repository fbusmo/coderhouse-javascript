// Declaración de un array de productos
const productos = [];

// Función para agregar un producto al array
function agregarProducto(nombre, precio, impuesto, descuento) {
    const producto = {
        nombre: nombre,
        precio: precio,
        impuesto: impuesto,
        descuento: descuento
    };
    productos.push(producto);
}

// Función para calcular el precio final de un producto
function calcularPrecioFinal(producto) {
    const impuestoDecimal = producto.impuesto / 100;
    const descuentoDecimal = producto.descuento / 100;

    const precioConImpuesto = producto.precio + (producto.precio * impuestoDecimal);
    const precioConDescuento = precioConImpuesto - (precioConImpuesto * descuentoDecimal);

    return precioConDescuento.toFixed(2);
}

// Función para mostrar el resumen del producto
function mostrarResumen(producto) {
    const impuestoDecimal = producto.impuesto / 100;
    const descuentoDecimal = producto.descuento / 100;

    const precioConImpuesto = producto.precio + (producto.precio * impuestoDecimal);
    const precioConDescuento = precioConImpuesto - (precioConImpuesto * descuentoDecimal);

    alert(`Resumen del producto:
Nombre: ${producto.nombre}
Precio: $${producto.precio.toFixed(2)}
Impuesto: ${producto.impuesto}%
Descuento: ${producto.descuento}%
Total a pagar: $${precioConDescuento.toFixed(2)}`);
}

// Función para consultar otro producto
function consultarOtroProducto() {
    const respuesta = prompt('¿Desea consultar otro producto? (Sí / No)').toLowerCase();
    return respuesta === 'sí' || respuesta === 'si';
}

// Bucle para agregar productos y calcular precios finales
let consultarOtro = true;
while (consultarOtro) {
    const nombre = prompt('Ingrese el nombre del producto:');
    const precio = parseFloat(prompt('Ingrese el precio del producto:'));
    const impuesto = parseFloat(prompt('Ingrese el impuesto del producto (%):'));
    const descuento = parseFloat(prompt('Ingrese el descuento del producto (%):'));

    if (isNaN(precio) || isNaN(impuesto) || isNaN(descuento)) {
        alert('Por favor, ingrese valores válidos.');
    } else {
        agregarProducto(nombre, precio, impuesto, descuento);
        mostrarResumen(productos[productos.length - 1]);
    }

    consultarOtro = consultarOtroProducto();
}

// Imprimir la lista de productos en la consola
console.log('Lista de productos:');
console.log(productos);
