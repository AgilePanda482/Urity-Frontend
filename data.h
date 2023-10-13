const char* ssid_1     = "MEGACABLE-2.4G-4CA5";
const char* password_1 = "m5zb88xvxU";
const char* ssid_2     = "######";
const char* password_2 = "######";


String pagina = R"====(<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=./img/urity-logo.png rel=icon sizes=32x32 type=image/png><title>Urity</title><link href=https://fonts.googleapis.com rel=preconnect><link href=https://fonts.gstatic.com rel=preconnect crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"rel=stylesheet><link href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css rel=stylesheet crossorigin=anonymous integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="referrerpolicy=no-referrer><style>:root{--Background-black:hsl(0, 0%, 0%)}*{box-sizing:border-box;margin:0;padding:0}body{background-color:var(--Background-black);color:#fff;font-family:'Hanken Grotesk',sans-serif;font-size:16px}.container{background-color:var(--Pale-blue);display:flex;flex-flow:column wrap;justify-content:center;align-items:center;min-height:100vh}.main{display:flex;flex-flow:column wrap;justify-content:space-between;align-items:center;height:100vh;background-color:#000;border-radius:1em;padding:1em 1em 7em 1em;margin:auto}.blur-in{animation:blur-in .9s linear both}.main-logo{display:flex;flex-flow:column wrap;align-items:center}.main-logo img{height:13em;margin-top:7em;transition:all .5s ease-in}.main-logo h1{font-size:2.6em;font-family:Merriweather,serif;transition:all .5s ease-in}.main-data{display:flex;flex-flow:column wrap;justify-content:space-between}.main-data p{display:none}.main-checking button{font-size:.9em;background-color:transparent;border:none;color:#fff;cursor:pointer}.msg-lector{display:none}@keyframes blur-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}@keyframes spinner-line-fade-more{0%,100%{opacity:0}1%{opacity:1}}@keyframes spinner-line-fade-quick{0%,100%,39%{opacity:.25}40%{opacity:1}}@keyframes spinner-line-fade-default{0%,100%{opacity:.22}1%{opacity:1}}@keyframes spinner-line-shrink{0%,100%,25%{transform:scale(.5);opacity:.25}26%{transform:scale(1);opacity:1}}</style><div class=container><main class=main><div class=main-logo><img alt=Urity class=blur-in id=logo-img src="https://lh3.googleusercontent.com/pw/ADCreHfKiwfJhkUEUcVNkqO8YePm0GOuJb6HBpdNJio3c0OCbwKv-SJO0qikebLoO17Z0zNiI5X-feRsjSM-SI1bMmguJlrxuhJKRgFEWp3CPQUCB72wKjot1GAbofwOgoJvQR9d9RI0WjoLojkI0J9QnNQq=w500-h500-s-no?authuser=0"><h1 class="blur-in main-logo-letters"id=logo-letters>Urity</h1></div><div class=main-data><p class=main-data-id id=main-data-id></div><div class=main-checking><div class=main-checking-btn><button class="blur-in main-checking-letters"id=verification>TOQUE PARA VERIFICAR.</button></div><p class="blur-in msg-lector"id=msg-lector>COLOQUE LA TARJETA EN EL LECTOR.</div></main></div><script>const logoImg = document.getElementById('logo-img')
        const verification = document.getElementById('verification')
        const logoLetters = document.getElementById('logo-letters')
        const msgLector = document.getElementById('msg-lector')
        // Crear una instancia de EventSource con la ruta "/events"
        let source = new EventSource("/events")
        let rfidStatus = {
            enable: false
        }

        verification.addEventListener("click", function() {

            logoImg.style.height = '8em'
            logoLetters.style.display = 'none'
            verification.style.display = 'none'
            msgLector.style.display = 'block'

            rfidStatus.enable = true

            fetch("/data", {
                method: "POST", 
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(rfidStatus),
            })
            .then(response => response.json())
            .then(rfidStatusñ => {
            console.log('Éxito:', rfidStatus);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        })

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
        
            const mainDataP = document.getElementById('main-data-id')
            mainDataP.style.display = 'block'
            mainDataP.innerHTML = uidUser.rfid_tag_id
        }

        //¿¿¿??? "Evento personalizado"
        /*source.addEventListener("myevent", function (e) {
            console.log("myevent", e.data);
        });
        }*/</script>)====";