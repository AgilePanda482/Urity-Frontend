// Crear una instancia de EventSource con la ruta "/events"
let source = new EventSource("/events")

// Configurar manejadores de eventos
source.addEventListener("open", function(events){
    console.log("Eventos Conectados")
});

source.addEventListener("error", function(events){
    if(events.target.readyState != EventSource.OPEN)
    console.log("Eventos Desconectados")
})

source.addEventListener("message", function(events){
    try {
        const uidUser = JSON.parse(events.data)
        handleJSONMessage(uidUser)
    }catch (error){
        console.error("Error al analizar el JSON")
    }
})

//¿¿¿??? "Evento personalizado"
/*source.addEventListener("myevent", function (e) {
    console.log("myevent", e.data);
  });
}*/

// Función para manejar mensajes JSON
function handleJSONMessage(uidUser) {
    // Mostrar el objeto JSON en la consola
 
    const mainDataP = document.getElementById('main-data-id')
    mainDataP.style.display = 'block'
    mainDataP.innerHTML = uidUser.rfid_tag_id
}


const logoImg = document.getElementById('logo-img')
const verification = document.getElementById('verification')
const logoLetters = document.getElementById('logo-letters')
const msgLector = document.getElementById('msg-lector')

verification.addEventListener("click", function() {

    logoImg.style.height = '8em'
    logoLetters.style.display = 'none'
    verification.style.display = 'none'
    msgLector.style.display = 'block'    
})
 