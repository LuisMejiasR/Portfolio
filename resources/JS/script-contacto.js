//añadiendo el evento donde esperamos que el documento se cargue para que podamos usar el JS despues
window.addEventListener("DOMContentLoaded", (e) => {
    //dentro de la función es donde se procesa lo que voy a hacer, luego de ya cargadas y procesadas las etiquetas HTML

    console.log("Welcome")

    //nos traemos el formulario para poder hacerle reset
    let formulario = document.querySelector(".formulario-contacto");
    //recupero el elemento HTML botón y lo guardo en una variable
    let boton = document.getElementById("boton-contacto");
    //agrego otro evento en el cual escucho a que el botón sea presionado
    boton.addEventListener("click", (evento) => {
        //vamos a envolver en un bloque try catch todo lo que podría producir un error
        try{
            //y dentro de ese evento voy a escribir lo que quiero que pase
            //voy a recuperar los elementos por ID
            let nombre = getNombreContacto();
            let email = getCorreoContacto();
            let telefono = getTelefonoContacto();
            let mensaje = getMensajeContacto();
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
            };
            console.dir(formularioContacto);
            guardarFormularioLleno (formularioContacto);
            mostrarExito("Your message was successfuly sent");
            //una vez teniendo el formulario en variable, le hacemos el reset
            formulario.reset();
        }catch(e){
            mostrarError(e.message);
        }
    });
});

//función global para obtener EL NOMBRE
function getNombreContacto() {
    //variable para almacenar valor del input nombre
    let inputNombreContacto = document.getElementById("nombre").value;
    //validación rápida del largo del nombre
    if (inputNombreContacto.length < 2){
        //si es menor que 3 caracteres, tiro una excepción y devuelvo un error
        throw new Error("The name is too short")
    }
    //sino regreso el valor del input
    return inputNombreContacto;
}

//función global para obtener EL CORREO
function getCorreoContacto() {
    //variable para almacenar valor del input correo
    let inputCorreoContacto = document.getElementById("correo").value;
    //validación rápida del largo del correo
    if (inputCorreoContacto.length < 5){
        //si es menor que 6 caracteres, tiro una excepción y devuelvo un error
        throw new Error("The email is too short")
    }
    //sino regreso el valor del input
    return inputCorreoContacto;
}

//función global para obtener EL TELEFONO
function getTelefonoContacto() {
    //variable para almacenar valor del input telefono
    let inputTelefonoContacto = document.getElementById("telefono").value;
    //validación rápida del largo del telefono
    if (inputTelefonoContacto.length < 5){
        //si es menor que 6 caracteres, tiro una excepción y devuelvo un error
        throw new Error("The phone number is too short")
    }
    //sino regreso el valor del input
    return inputTelefonoContacto;
}

//función global para obtener EL MENSAJE
function getMensajeContacto() {
    //variable para almacenar valor del mensaje
    let inputMensajeContacto = document.getElementById("message").value;

    //validación rápida del largo del mensaje
    if (inputMensajeContacto.length < 3){
        //si es menor que 4 caracteres, tiro una excepción y devuelvo un error
        throw new Error("The message is too short")
    }

    //regreso el valor del input
    return inputMensajeContacto;
}

//función global para obtener EL MOTIVO DE CONTACTO
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

    if (inputMotivoContacto.length < 1){
        throw new Error("You must choose at least one reason for contact");
    }

    //regreso el arreglo completo
    return arrMotivosContacto;
}

//función global para GUARDAR FORMULARIO LLENO
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

//función global para MOSTRAR ERROR
function mostrarError(mensajeDeError){
    //tenemos que hacer que el elemento se muestre en el HTML cambiando el display
    document.getElementById("form-mensaje-error").style.display = "block";
    //seleccionamos la p a través de selectores CSS
    const p = document.querySelector("#form-mensaje-error p");
    //creamos un elemento span dentro del documento
    const span = document.createElement("span");
    //y luego creamos un string con el mensaje de error
    const spanText = document.createTextNode(mensajeDeError);
    //luego dentro del span introducimos el string
    span.appendChild(spanText);
    //y dentro del p introducimos el span
    p.appendChild(span);
}

//función global para MOSTRAR EL EXITO
function mostrarExito(mensajeExito){
    //seleccionamos el elemento del cuadro verde y lo mostramos
    document.getElementById("form-mensaje-exito").style.display = "block";
    //selecionamos la p a través de selectores CSS
    const p = document.querySelector("#form-mensaje-exito p");
    //creamos un nuevo span dentro del documento
    const span = document.createElement("span");
    //creamos un string dentro del documento con el mensaje
    const spanText = document.createTextNode(mensajeExito);
    //luego dentro del span introducimos el string
    span.appendChild(spanText);
    //y dentro del p introducimos el span
    p.appendChild(span);
}