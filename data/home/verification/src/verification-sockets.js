const socket = io()

export const alumno = (callback) => {
    socket.on("UID", callback)
} 


// Configurar manejadores de eventos
/*let source = new EventSource("/events")
let rfidStatus = {
    enable: false
}*/

/*source.addEventListener("open", function(events){
    console.log("Eventos Conectados")
});

source.addEventListener("error", function(events){
    if(events.target.readyState != EventSource.OPEN)
    console.error("Eventos Desconectados")
})

source.addEventListener("message", function(events){
    try {
        const uidUser = JSON.parse(events.data)
        handleJSONMessage(uidUser)
    }catch (error){
        console.error("Error al analizar el JSON")
    }
})*/







