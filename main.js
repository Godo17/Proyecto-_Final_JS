
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

const crearUsuario = (nombre,documento,tipologia,descripcion) => {
    const usuario = {
        fecha: new Date(),
        id:crypto.randomUUID(),
        nombre: nombre,
        documento: documento,
        tipologia: tipologia,
        descripcion: descripcion
    }

    usuarios.push(usuario)
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
}

crearUsuario("Gabriel",36996737)
console.log(usuarios)

const principal = () => {
    const btnEjecutar = document.getElementById("btnEjecutar")
        btnEjecutar.addEventListener("click",() => {
            const nombreUsuario = document.getElementById("nombreUsuario")
            const documentoUsuario = document.getElementById("documentoUsuario")
            const buscarTipologia = document.getElementById("buscarTipologia")
            const detalle = document.getElementById("detalle")
            crearUsuario(nombreUsuario.value, documentoUsuario.value, buscarTipologia.value, detalle.value)
            //acá deberia crearse un Id random y mostrarse al usuario con un alert
            
            const nroTicket = crypto.randomUUID()
            alert("Su numero de ticket es: " + nroTicket)
            nombreUsuario.value=""
            documentoUsuario.value=""
            buscarTipologia.value=""
            detalle.value=""
        })
        
}

principal()
