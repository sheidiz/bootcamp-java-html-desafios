/*
    Desarrollar la lógica de un login:
    Pedir la edd del usuario y validar si es mayor a 18 años.
        En caso correcto mostrar un mensaje de Bienvenida.
        En caso que no lo sea, mostrar un mensaje de Error.
*/

let edad = obtenerEdad();

if(edad > 18){ //la consigna dice mayor a 18
    alert('Bienvenidx!');
}else{
    alert('Error, no es mayor a 18!')
}

function obtenerEdad(){
    let edad;
    do{
        edad = Number(prompt('Ingrese su edad: '));
    }while(!edad || edad <= 0);
    return edad;
}