// La idea del proyecto es crear una app para que el usuario ingrese un reclamo y le genere un ticket con un id.




const baseClientes = []

function datosClientes (nombre, apellido, dni, telefono){
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        telefono: telefono
    }
    baseClientes.push(cliente)
}


function consultarBaseClientes (){
    for ( const cliente of baseClientes){
        alert ("NOMBRE: " + cliente.nombre + " APELLIDO: " + cliente.apellido + " DNI: " + cliente.dni + " TELEFONO: " + cliente.telefono)
    }
}

alert("Bienvenido al Servicio de Soporte técnico de Gertech. Lo ayudaremos a registrar su consulta y resolver su inconveniente")

function menu() {
    const registrarse = prompt ("Desea continuar al regristro de sus datos? (SI/NO)")
    if (registrarse == "SI") {
        const registroNombre = prompt("Ingrese su nombre")
        const registroApellido = prompt("Ingrese su apellido")
        const registroDni = prompt("Ingrese su dni")
        const registroTelefono = prompt("Ingrese su nùmero de telefono")
        datosClientes(registroNombre, registroApellido, registroDni, registroTelefono)
        consultarBaseClientes(registroNombre)
    }
    else if (registrarse == "NO"){
        alert("Gracias por contactarse con nosotros.")
        
    }
    else{
        alert("acción no válida")
    }
        
    }

menu()

const listaReclamos = ["Router", "Mala señal", "Lentitud", "dar de baja"] 


alert("Seleccione el motivo de su reclamo :" + listaReclamos.join("-"))

function matrizRespuestasPrimeraLinea(){
    let continuar = confirm("desea continuar?")
    while (continuar) {
        let reclamoCliente = prompt (" escriba la opción correcta")
            if (reclamoCliente == "Router") {
                alert("Reinicie el router y aguarde 10 minutos aprox. Verifica que encienda la luz led.")        
            }
            else if (reclamoCliente == "Mala señal") {
                alert("Recuerde que debe mantenerse dentro de una distancia no mayor a 10 metros del router")
            }
            else if (reclamoCliente == "Lentitud") {
                alert("Si tiene más de 5 dispositivos conectados, evalúe aumentar su plan actual")
            }
            else if (reclamoCliente == "dar de baja") {
                let bajaCliente = prompt ("Ingrese el motivo de la baja del servicio")
                alert(bajaCliente + " fue su motivo ingresado.")
                alert("Su solicitud de baja fue procesada exitosamente, en breve se comunicarán del soporte técnico para hacer efectiva la solicitud. Muchas gracias")
            }
            else{
                alert("acción no válida")
            }
            continuar = confirm ("vuelva a ingresar otra opción")
    }

}
matrizRespuestasPrimeraLinea()


//Si el reclamo no fue resuelto con las respuestas de primera línea, ahí se genera un ticket para el cliente.