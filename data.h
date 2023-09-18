const char* ssid_1     = "######";
const char* password_1 = "######";
const char* ssid_2     = "######";
const char* password_2 = "######";


String pagina = R"====(<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=./img/urity-logo.png rel=icon sizes=32x32 type=image/png><title>Urity</title><link href=https://fonts.googleapis.com rel=preconnect><link href=https://fonts.gstatic.com rel=preconnect crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"rel=stylesheet><style>:root{--Background-black:hsl(0, 0%, 0%)}*{box-sizing:border-box;margin:0;padding:0}body{background-color:var(--Background-black);color:#fff;font-family:'Hanken Grotesk',sans-serif;font-size:16px}.container{background-color:var(--Pale-blue);display:flex;flex-flow:column wrap;justify-content:center;align-items:center;min-height:100vh}.main{display:flex;flex-flow:column wrap;justify-content:space-between;align-items:center;height:70vh;background-color:#000;border-radius:1em;padding:1em}.main-logo{display:flex;flex-flow:column wrap;align-items:center}.main-logo img{height:13em}.main-logo h1{font-size:2.6em;font-family:Merriweather,serif}.main-checking p{font-size:.9em}</style><div class=container><main class=main><div class=main-logo><img alt=Urity src=./img/urity-logo.png><h1 class=main-logo-letters>Urity</h1></div><div class=main-checking><p class=main-checking-letters>VERIFICACIÓN.</div></main></div><script>let source = new EventSource("/events")

            source.addEventListener("open", function(events){
                console.log("Eventos Conectados")
            });

            source.addEventListener("error", function(events){
                if(events.target.readyState != EventSource.OPEN)
                console.log("Eventos Desconectados")
            })

            source.addEventListener("message", function(events){
                try {
                    const message = JSON.parse(events.data)
                    handleJSONMessage(message)
                }catch (error){
                    console.error("Error al analizar el JSON")
                }
            })

            function handleJSONMessage(message) {
                console.log(message);
            }</script>)====";