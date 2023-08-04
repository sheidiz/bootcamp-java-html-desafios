/*
    Diseñar un programa que pida los datos requeridos y realice el cálculo de Punto de equilibrio
    CV = (Costos fijos) / (Precio de Venta - Costos Variables)
*/
let costosFijos = obtenerCostoFijo();
let precioVenta = obtenerPrecioVenta();
let costosVariables = obtenerCostoVariable();

let CV = costosFijos / (precioVenta - costosVariables);

alert(`La cantidad de ventas necesarias para alcanzar el Punto de Equilibrio son: ${CV}`);

function obtenerCostoFijo(){
    let costo;
    do{
        costo = Number(prompt('Ingrese sus costos fijos: '));
    }while(!costo || costo <= 0);
    return costo;
}
function obtenerCostoVariable(){
    let costo;
    do{
        costo = Number(prompt('Ingrese sus costos variables: '));
    }while(!costo || costo <= 0);
    return costo;
}
function obtenerPrecioVenta(){
    let precio;
    do{
        precio = Number(prompt('Ingrese su precio de venta: '));
    }while(!precio || precio <= 0);
    return precio;
}