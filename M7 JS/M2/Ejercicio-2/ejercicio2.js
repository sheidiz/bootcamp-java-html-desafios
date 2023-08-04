/*
    Inicio de sesión de 3 pasos:
    1. Solicitar credenciales del usuario: usuario y contraseña
    2. Validar las cresenciales
    3. Tomar accion: dar un mensaje de bienvenida o de error
    Solicitar un usuario y clave, el usuario estara validad si es "admin" y su clave es "1234"
*/

let usuario = prompt('Ingrese su usuario: ');
let clave = prompt('Ingrese su clave: ');

if(usuario == "admin" && clave == "1234"){
    alert("Bienvenidx!");
}else{
    alert("Error, datos invalidos");
}