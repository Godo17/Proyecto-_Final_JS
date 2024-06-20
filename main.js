
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


const borrarTicket = (id) => {
    usuarios = usuarios.filter(usuario => usuario.id != id)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

}

const borrarVistaTicket = (id) =>{
    const element = document.getElementById(id)
    element.remove()
}

const actualizarTicket = (id,nombre,documento,tipologia,descripcion) =>{
    usuarios = usuarios.map(usuario => {
        if(usuario.id === id){
            return{
                fecha: new Date(),
                nombre,
                id,
                documento,
                tipologia,
                descripcion
            }
        }
        return usuario
    })
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    

}


const visualizarTicket = (usuario) => {
     const app = document.getElementById("app")
     const element = document.createElement("div")
     element.className = "ticket"
     element.id = usuario.id  
     element.innerHTML = `
                        <input type="text" class="input" value="${usuario.nombre}">
                        <input type="text" class="input" value="${usuario.fecha}">
                        <input type="text" class="input" value="${usuario.id}">
                        <input type="text" class="input" value="${usuario.documento}">
                        <input type="text" class="input" value="${usuario.tipologia}">
                        <textarea type="text" class="input">${usuario.descripcion}</textarea>
                        
                        <button class="btn btnActualizar">Actualizar</button>
                        <button class="btn btnBorrar">Eliminar</button>
                        `
    app.append(element)
}
const principal = () => {

   /* usuarios.forEach(usuario => {
        crearUsuario(usuario)
    })*/
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
            Swal.fire({
                title: nombreUsuario.value,
                text: 'Su N° de ticket: ' + nroTicket,
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })
            nombreUsuario.value=""
            documentoUsuario.value=""
            buscarTipologia.value=""
            detalle.value=""
        })
        
        const app = document.getElementById("app") 
        app.addEventListener("click",(event)=>{
            if(event.target && event.target.classList.contains("btnBorrar")){
                const parentElement = event.target.parentElement
                const id = parentElement.id
                borrarTicket(id)
                borrarVistaTicket(id)
            }
            if(event.target && event.target.classList.contains("btnActualizar")){
                const parentElement = event.target.parentElement
                const id = parentElement.id
                const inputs = parentElement.getElementsByClassName("input")
                const nombre = inputs[0].value
                const documento = inputs[3].value
                const tipologia = inputs[4].value
                const descripcion = inputs[5].value
                actualizarTicket(id,nombre,documento,tipologia,descripcion)
            }
        })
}

principal()

