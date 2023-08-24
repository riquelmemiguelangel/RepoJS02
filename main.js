//datos de usuarios
const id_user1 = 1;
const nomyape1= "Manuel Sanmartin";
const pass1 = "1234";

//datos de usuario2
const id_usuario2 = 2;
const nombre_completo2 = "Juan Belgrano";
const pass2 = "1234";

let apeynom ="";
let salida = true
let cantidad = 0;
let comida = "0";
let acu_total = 0;

while(salida){
    let Nusuario = prompt("Bienvenido al Bufet JS-2023!!! <Ingreso de PEDIDO> \n\nSocios       - <Ingrese su numero de socio>\nInvitados   - <Ingrese 0>\nSalir            - <Presione X>\n\n\nSocios 20% de descuento \n\n\n");
    if (Nusuario == "x" || Nusuario == "X"){
        salida=false;
    } else {
        if (Nusuario == null || Nusuario == undefined){
            Nusuario = "vacio";
        }
            switch(Nusuario){
                case "0":
                    apeynom=prompt("Ingrese su nombre y apellido"); 
                    break;
                case "1":
                    let password = prompt ("Ingrese su contraseña").trim();
                    if(password === pass1){
                        alert("key");
                    }else{
                        alert("nNNNOO");
                    }
                    break;
                case "2":
                    break;
                case "vacio" :
                    break;
            }

    }  
        //let password = prompt ("Ingrese su contraseña").trim();
}       


function(GuardaTotal){
    
}

