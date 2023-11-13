const logoImg = document.getElementById('logo-img')
const verification = document.getElementById('verification')
const logoLetters = document.getElementById('logo-letters')
const msgLector = document.getElementById('msg-lector')
const spinner = document.getElementById("spinner");

const mainDataP = document.getElementById('main-data-id')

// function getUID () {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (uidUser =! '') {
//                 resolve (showID())
//             }

//             backDesing()
//         }, "10000")

//         reject()
//     })
// }

// Crear una instancia de EventSource con la ruta "/events"

let source = new EventSource("/events")
let rfidStatus = {
    enable: false
}

//Ocultar spinner
function hideSpinner() {
    spinner.style.display = 'none'
}
//Mostrar spinner
function showSpinner() {
    spinner.style.display = 'block'
}
//Animación para esperar el JSON(RFID)
function verificationDataDesing() {
    logoImg.style.height = '8em'
    logoLetters.style.display = 'none'
    verification.style.display = 'none'
    msgLector.style.display = 'block'
    msgLector.innerHTML = 'COLOQUE LA TARJETA EN EL LECTOR.'
}
//Animación para regresar al diseño normal
function backDesing() {
    logoImg.style.height = '13em'
    logoLetters.style.display = 'block'
    verification.style.display = 'block'
    msgLector.style.display = 'none'
    hideSpinner()
    hideID()
}
//Ocultamos la etiqueta que tiene el RFID
function hideID() {
    mainDataP.style.display = 'none'
}
//Mostramos la etiqueta que tiene el RFID
function showID() {
    mainDataP.style.display = 'block'
    mainDataP.innerHTML = uidUser
    msgLector.style.display = 'none'
}


// Configurar manejadores de eventos
source.addEventListener("open", function(events){
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
})

// Función para manejar mensajes JSON
function handleJSONMessage(uidUser) {
    // Mostrar el objeto JSON en la consola

    hideSpinner() //Ocultamos el spinner de carga
    // mainDataP.style.display = 'block' //Mostramos el elemento HTML
    // mainDataP.innerHTML = uidUser //Mandar dato por consola (solo para pruebas)
    let ID = uidUser  
    msgLector.innerHTML = `ID DE LA TARJETA: ${ID}` //Cambiamos el mensaje de abajo
    // mainDataP.innerHTML = uidUser.rfid_tag_id   //Dato por JSON (Uso para traer el dato por ESP32)
    
    //Una vez mostrado el ID en pantalla, habrá una espera de 10 seg.
    //Despues de eso el ID se ocultará y el diseño de entrada volvera a aparecer
    setTimeout(() => {
        hideID() //Ocultamos el ID
        backDesing() //Volvemos al diseño de inicio
    }, "15000"); 
}



//Evento a través de "TOQUE PARA VERIFICAR"
verification.addEventListener("click", function() {

    rfidStatus.enable = true

    fetch("/data", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rfidStatus),
    })
    .then((response) => response.json())
        .then((rfidStatus) => {
        console.log('Éxito:', rfidStatus);
    })
    .catch((error) => {
        console.error('Error:', error);
    })


    showSpinner() //Se muestra el spinner
    verificationDataDesing() //Se hace la animación para esperar dato
    
    //El programa esperará 30 segundos en espera de la tarjeta
    //Si el programa no detecta tarjeta después de ese timepo se volverá al diseño de inicio
    setTimeout(() => {
        backDesing() //Vuelve al diseño de inicio
    }, "30000");
})

//¿¿¿??? "Evento personalizado"
/*source.addEventListener("myevent", function (e) {
    console.log("myevent", e.data);
  });
}*/