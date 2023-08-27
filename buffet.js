//datos de usuarios
const id_user1 = 1;
const nomyape1= "Manuel Sanmartin";
const pass1 = "1234";

//datos de usuario2
const id_usuario2 = 2;
const nombre_completo2 = "Juan Belgrano";
const pass2 = "1234";

let apeynom ="";
let salida = true;
let salidaComida=true;
let cantidad = 0;
let comida = "0";
let acu_total = 0;

//Variables let para mensajes
let MensajeComida ="";
sistema();
function sistema(){
while(salida){
    let Nusuario = prompt("Bienvenido al Bufet JS-2023!!! <Ingreso de PEDIDO> \n\nSocios       - <Ingrese su numero de socio>\nInvitados   - <Ingrese 0>\nSalir            - <Presione X>\n\n\nSocios 20% de descuento \n\n\n");
    if (Nusuario == "x" || Nusuario == "X"){
        salida=false;
    } else {
        if (Nusuario == null || Nusuario == undefined){
            Nusuario = "vacio";
        }

        apeynom= DatoCliente(Nusuario);
        switch(apeynom){
            case "NO":
                alert("No existe ese Numero de Cliente");
                break;
            case "NOPASS":
                alert("No es la contraseña correcta");
                break;
            default:
                alert("Bienvenido " + apeynom);
        }

        while(salidaComida){
            let comida;
            comida =prompt("Seleccione su comida\n\n1. Hamburguesa ($ 850)\n2. Pancho ($ 700)\n3- Empanada ($ 800)\n4. Sin comida\n5. Continuar\nx. Cancela pedido");
            salidaComida= armadocomida(comida);
            alert(MensajeComida +"\nTotal $"+acu_total);
        }
        salidaComida=true;
        alert("seleccione su bebida\n1. Naranja\n2. agua\n3.Gaseosa\n4. Sin Bebida\nx. Cancela el pedido");
        alert("Este es su pedido\nCliente: "+apeynom+"\n comida\nBebida");
    }  

        //let password = prompt ("Ingrese su contraseña").trim();
}       

}//fin de funcion sistema - Bloque PRINCIPAL del programa.


function armadocomida(caso){
    switch(caso){
        case"1":
            MensajeComida = MensajeComida +"\nHamburguesa";
            acu_total=  acu_total + 850;
            return true;
        case"2":
            break;
        case"3":
            break;
        case"4":
            break;
        case "5":
            return false;
            break;
        default:
    }
   
}


function DatoCliente(idusuario){
    let password
    switch(idusuario){
        case "0":
            apeynom=prompt("Ingrese su nombre y apellido"); 
            break;
        case "1":
             password = prompt ("Ingrese su contraseña").trim();
            if(password === pass1){
                return nomyape1;
            }else{
                return "NOPASS";
            }
            break;
        case "2":
             password = prompt ("Ingrese su contraseña").trim();
            if(password === pass2){
                return nomyape2;
            }else{
                return "NOPASS";
            }

            break;
        case "vacio" :
            break;
        default:
            return"NO"
    }
}


//function(GuardaTotal){
    
//}


// cuando esta todo cargado se le pide datos al usuario
window.addEventListener('load'), function() {
     sistema();
}
//)
