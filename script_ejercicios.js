/* let nombre= prompt("Ingrese su nombre completo");
alert("Bienvenid@ a mi sitio web "+nombre);
let edad=prompt("Cual es su edad?");
alert("Su edad es de "+edad+" años");
alert("Sus datos personales: "+nombre+" "+edad+" años");
 */

//Ejercicio 2

/* let mailTecnico = prompt ( 'Ingrese su correo electronico para subscribirse a nuestro boletin de ofertas')

let nombretecnico = prompt ('por ultimo ingrese su nombre y apellido')

let nombremail = prompt ( 'confirma sus datos' + '' + mailTecnico + '' + nombretecnico)

if (nombremail)  alert('Gracias! por cualquier consulta estamos a su disposicion ')
else
alert ('pulsa f5 para volver a cargar tus datos')
 */

//Ejercicio 3
/* let tengo_plata = true ;
let llueve = false;
let feriado = false;

if ((tengo_plata & !llueve) || feriado) {
    alert ("Hoy se sale");
} 
else {
    alert ("hoy sale netflix)");
} */

//Ejercicio 4
/* const user_admin = "admin";
const user_pass= "ADMINISTRADOR1234";

let usuario = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");



if (user_admin === usuario && user_pass === pass){

    console.log("El usuario registrado es administrador");

    let resp= confirm("Queres cambiar el pass??");
    
    if (resp){

        let pass_nueva = prompt("Ingresa tu nueva contraseña");

        if (user_pass != pass_nueva){

            console.log("contraseña cambiada con exito");

        }else{

            alert("No podes utilizar la misma contraseña");

        }



    }


}else {

    let mensaje = "Ingresar correctamente los siguientes datos:";

    if (user_admin != usuario){

        mensaje += "\nUsuario";

    }

    if (user_pass != pass){
        mensaje += "\nContraseña";

    }

    alert(mensaje);

}
         */

//EJERCICIO 5

       
