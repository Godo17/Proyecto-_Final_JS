
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

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
    return usuario
}

crearUsuario()
console.log(usuarios)

const borrarTicket = (id) => {
    usuarios = usuarios.filter(usuario => usuario.id != id)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

}

borrarTicket()


const visualizarTicket = (usuario) => {
     const app = document.getElementById("app")
     const element = document.createElement("div")
     element.className = "ticket"
     element.innerHTML = `
                        <input type="text" class="input" value="${usuario.nombre}">
                        <input type="text" class="input" value="${usuario.fecha}">
                        <input type="text" class="input" value="${usuario.id}">
                        <input type="text" class="input" value="${usuario.documento}">
                        <input type="text" class="input" value="${usuario.tipologia}">
                        <textarea type="text" class="detalle">${usuario.descripcion}</textarea>
                        
                        <button class="btnEjecutar btn-actualizar">Actualizar</button>
                        <button class="btnEjecutar btn-eliminar">Eliminar</button>
                        `
    app.append(element)
}
const principal = () => {
    const btnEjecutar = document.getElementById("btnEjecutar")
        btnEjecutar.addEventListener("click",() => {
            const nombreUsuario = document.getElementById("nombreUsuario")
            const documentoUsuario = document.getElementById("documentoUsuario")
            const buscarTipologia = document.getElementById("buscarTipologia")
            const detalle = document.getElementById("detalle")
            const usuario = crearUsuario(nombreUsuario.value, documentoUsuario.value, buscarTipologia.value, detalle.value)
            visualizarTicket(usuario)
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

