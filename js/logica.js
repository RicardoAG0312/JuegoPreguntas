let INDEX_PREGUNTA = 0;
let puntaje = 0;
cargarPregunta(INDEX_PREGUNTA);
function cargarPregunta(index){
    objetoPregunta = basePreguntas[index];
    opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta);
    for (let i = 0; i < 3; i++) {
        opciones.sort(( ) => Math.random() - 0.5);
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    document.getElementById("opcion1").innerHTML = opciones[0];
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];
}
async function seleccionarOpciones(index){
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta) {
        await Swal.fire({
            title: "Respuesta Correcta",
            text: "La respuesta ha sido correcta",
            icon: "success",
        });
        puntaje++;
    } else {
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text: "La respuesta correcta es: " + objetoPregunta.respuesta,
            icon: "error",
        });
    }
    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA >= basePreguntas.length) {
        await Swal.fire({
            title: "Juego Terminado",
            text: "Tu puntaje fue de: " + puntaje + " / " + basePreguntas.length,
        });
        INDEX_PREGUNTA = 0;
        puntaje = 0;
    }
    cargarPregunta(INDEX_PREGUNTA);
}

function ayuda() {
    Swal.fire({
        title: "Ayuda",
        text: objetoPregunta.ayuda,
    });
}