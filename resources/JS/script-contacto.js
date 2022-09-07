//añadiendo el evento donde esperamos que el documento se cargue para que podamos usar el JS despues
window.addEventListener("DOMContentLoaded", (e) => {
    //dentro de la función es donde se procesa lo que voy a hacer, luego de ya cargadas y procesadas las etiquetas HTML

    console.log("Hola")

    //recupero el elemento HTML botón y lo guardo en una variable
    let boton = document.getElementById("boton-contacto");
    //agrego otro evento en el cual escucho a que el botón sea presionado
    boton.addEventListener("click", (evento) => {
        //y dentro de ese evento voy a escribir lo que quiero que pase
        //voy a recuperar los elementos por ID
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("correo").value;
        let telefono = document.getElementById("telefono").value;
        let mensaje = document.getElementById("message").value;
        //para los que no son string sino selección, necesito una función que los recorra y vea cual fue seleccionado.
        let motivoContacto = getMotivoContacto();

        //para guardar el mensaje tengo que crear una variable y armarla con las otra variables en formato JSON
        let formularioContacto = {
            nombre,
            email,
            telefono,
            mensaje,
            motivoContacto,
            fecha_contacto: (new Date()).toISOString()
        }
        console.dir(formularioContacto);
        guardarFormularioLleno (formularioContacto);
    });
});

//FUNCIÓN GLOBAL PARA OBTENER EL MOTIVO DE CONTACTO
function getMotivoContacto() {
    //a través de esta variable tomo con selectores CSS todos los "input con nombre motivo-contacto que estén seleccionados"
    let inputMotivoContacto = document.querySelectorAll("input[name='motivo-contacto']:checked");
    //creo un arreglo para poder irlos sumando
    let arrMotivosContacto = [];

    //recorro los input de motivos y le hago push al arreglo creado
    for (let i = 0; i < inputMotivoContacto.length; i++){
        //creo la variable con el motivo seleccionado
        const motivo = inputMotivoContacto[i].value;
        //para poderla pushear al arreglo
        arrMotivosContacto.push(motivo);
    }

    //regreso el arreglo completo
    return arrMotivosContacto;
}

//FUNCIÓN GLOBAL PARA GUARDAR MENSAJE FORMULARIO
function guardarFormularioLleno (formularioLleno){
    //constante para guardar url de firebase
    const baseUrl = "https://curso-frontend-1ae31-default-rtdb.firebaseio.com/"
    //constante para agregarle a la URL la dirección exacta donde se guardarán
    const url = baseUrl + "/formularioLleno.json";
    //metodo fetch
    fetch (url, {
        method: "POST",
        body: JSON.stringify(formularioLleno)
    });
}