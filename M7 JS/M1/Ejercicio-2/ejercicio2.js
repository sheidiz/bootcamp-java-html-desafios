/*
    Diseñar un programa en JavaScript que reciba el ingreso total y muestre el monto a dedicar a cada una de esas categorías.
    Modelo de presupuesto 50-30-20:
        50% para los gastos necesarios
        30% para gastos opcionales
        20% para ahorro e inversión
*/
let ingresoTotal = obtenerIngreso();

let gastosNecesarios = ingresoTotal * 0.5;
let gastosOpcionales = ingresoTotal * 0.3;
let ahorros = ingresoTotal * 0.2;

alert(`Con ingresos de $${ingresoTotal} el presupuesto es de: \n`
    + `* Gastos Necesarios: $${gastosNecesarios} \n`
    + `* Gastos Opcionales: $${gastosOpcionales} \n`
    + `* Ahorros e Inversión: $${ahorros}`);

function obtenerIngreso(){
    let ingreso;
    do{
        ingreso = Number(prompt('Ingrese su ingreso total: '));
    }while(!ingreso || ingreso <= 0);
    return ingreso;
}