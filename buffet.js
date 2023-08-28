//datos de usuarios
const id_user1 = 1;
const nomyape1= "Manuel Sanmartin";
const pass1 = "1234";

//datos de usuario2
const id_usuario2 = 2;
const nomyape2 = "Juan Belgrano";
const pass2 = "1234";

let apeynom ="";
let salida = true;
let salidaComida=true;
let salidaBebida=false;
let cantidad = 0;
let comida = "0";
let acu_total = 0;
let descuento = true;

//Variables let para mensajes
let MensajeComida ="";
//sistema();
function sistema(){
    while(salida){
        let Nusuario = prompt("Bienvenido al Bufet JS-2023!!! <Ingreso de PEDIDO> \n\nSocios       - <Ingrese su numero de socio>\nInvitados   - <Ingrese 0>\nSalir            - <Presione X>\n\n\nSocios 20% de descuento \n\n\n");
        if (Nusuario == "x" || Nusuario == "X"){
            salida=false;
            salidaComida=false;
        } else {
            if(Nusuario==undefined){
                //alert("es indefenido"); 
                Nusuario="vacio";
            }
            if (Nusuario == null){
                Nusuario = "vacio";
            }

            apeynom= DatoCliente(Nusuario);
            switch(apeynom){
                case "NO":
                    alert("No existe ese Numero de Cliente");
                    salidaComida=false;
                    break;
                case "NOPASS":
                    alert("No es la contraseña correcta");
                    salidaComida=false;
                    break;
                default:
                    //alert("Bienvenido " + apeynom);
            }
        }

        while(salidaComida){
            let comida;
            comida =prompt("Bienvenido " + apeynom+"\n\nSeleccione su comida\n\n1. Hamburguesa ($ 850)\n2. Pancho ($ 700)\n3. Empanada ($ 800)\n4. Continuar\nx. Cancela pedido");
            salidaComida= armadocomida(comida);
        }
        salidaComida=true;


        while(salidaBebida){
            let bebida;
            bebida= prompt("seleccione su bebida\n1. Naranja ($450)\n2. Agua     ($400)\n3. Gaseosa  ($600)\n4. Continuar\nx. Cancela el pedido");
            salidaBebida=armadobebida(bebida);
        }
        salidaBebida=true;
        
        if(acu_total==0){
            alert("Cliente "+apeynom +" NO realizo Pedido");
        }else{
            if(descuento){
                acu_total=acu_total-(acu_total*20/100);
            }
            MensajeComida="\nPedido de Cliente: "+apeynom+"\n"+MensajeComida;
            alert(MensajeComida +"\n\nTotal $"+acu_total);
            acu_total=0;
            MensajeComida="";
        }   






        
    }
}//fin de funcion sistema - Bloque PRINCIPAL del programa.

function armadobebida(caso){
    switch(caso){
        case"1":
            MensajeComida = MensajeComida +"\nNaranja";
            acu_total=  acu_total + 450;
            return true;
        case"2":
            MensajeComida = MensajeComida +"\nAgua";
            acu_total=  acu_total + 400;
            return true;
            break;
        case"3":
            MensajeComida = MensajeComida +"\nGaseosa";
            acu_total=  acu_total + 600;
            return true;
            break;
        case "4":
            //salidaBebida=true;
            return false;
            break;
        default:
    }
}
function armadocomida(caso){
    switch(caso){
        case"1":
            MensajeComida = MensajeComida +"\nHamburguesa";
            acu_total=  acu_total + 850;
            return true;
        case"2":
            MensajeComida = MensajeComida +"\nPancho";
            acu_total=  acu_total + 700;
            return true;
            break;
        case"3":
            MensajeComida = MensajeComida +"\nEmpanada";
            acu_total=  acu_total + 800;
            return true;
            break;
        case "4":
            salidaBebida=true;
            return false;
            break;
        case "x":
            acu_total=0
            salidaBebida=false;
            return false;
            break;
        default:
    }
   
}


function DatoCliente(idusuario){
    let password;
    switch(idusuario){
        case "0":
            let invitado=prompt("Ingrese su nombre y apellido"); 
            descuento=false;
            return invitado;
            break;
        case "1":
             password = prompt ("Ingrese su contraseña").trim();
            if(password === pass1){
                descuento=true;
                return nomyape1;
            }else{
                return "NOPASS";
            }
            break;
        case "2":
             password = prompt ("Ingrese su contraseña").trim();
            if(password === pass2){
                descuento=true;
                return nomyape2;
            }else{
                return "NOPASS";
            }

            break;
        case "vacio" :
            return "NO";
            break;
        default:
            return"NO"
    }
}



// cuando esta todo cargado se le pide datos al usuario
window.addEventListener('load', function() {
     sistema();
});
