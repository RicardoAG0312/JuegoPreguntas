let basePreguntas = [
    {
        pregunta: "¿Cuántos litros de sangre tiene una persona adulta?",
        respuesta: "Tiene entre 4 y 6 litros.",
        ayuda: "El volumen de sangre representa del 7 al 8% del peso corporal.",
        distractores: [
            "Tiene 10 litros",
            "Tiene 7 litros",
            "Tiene 0,5 litros"
        ], 
    },
    {
        pregunta: "¿Quién es el autor de la frase (Pienso y luego existo)?",
        respuesta: "Descartes",
        ayuda: "Es un filosofo francés",
        distractores: [
            "Galileo Galilei",
            "Sócrates",
            "Francis Bacon"
        ], 
    },
    {
    pregunta: "¿Cuál es el país más grande y el más pequeño del mundo?",
    respuesta: "Rusia y Vaticano",
    ayuda: "El más grande tiene un area de 17 millones de kilometros cuadrados y el más pequeño tiene 0,44 kilometros cuadrados",
    distractores: [
        "China y Nauru",
        "Canada y Mónaco",
        "Estados Unidos y Malta"
    ], 
    },
    {
    pregunta: "¿Cuál es el grupo de palabras escritas correctamente?",
    respuesta: "Metamorfosis, extranjero, diversidad, equilibrio",
    ayuda: "Piensa",
    distractores: [
        "Metamorfosis, extrangero, dibersidad, equilibrio",
        "Metaformosis, estranjero, diversidad, ekilibrio",
        "Metamórfosis, eztranjero, divérsidad, ecuilibrio"
    ], 
    },
    {
    pregunta: "¿Cuál es el libro más vendido en el mundo después de la Biblia?",
    respuesta: "Don Quijote de la Mancha",
    ayuda: "Fue escrito por Miguel de Cervantes Saavedra",
    distractores: [
        "El Principito",
        "La Odisea",
        "El Señor de los Anillos"
    ], 
    },
    {
    pregunta: "¿Cuántos decimales tiene el número pi π?",
    respuesta: "Infinitos",
    ayuda: "Piensa",
    distractores: [
        "Mil",
        "Veinte",
        "Cien"
    ], 
    },
    {
    pregunta: "La sal común está formada por dos elementos, ¿cuáles son?",
    respuesta: "Sodio y Cloro",
    ayuda: "La fórmula química de la sal común o cloruro de sodio es NaCl",
    distractores: [
        "Sodio y Potasio",
        "Cristal y Sodio",
        "Sodio y Carbono"
    ], 
    },
    {
    pregunta: "¿Cuántos jugadores por equipo participan en un partido de voleibol?",
    respuesta: "6",
    ayuda: "Piensa",
    distractores: [
        "4",
        "14",
        "10"
    ], 
    },
    {
    pregunta: "¿Cuáles son los representantes más destacados de la literatura renacentista?",
    respuesta: "Miguel de Cervantes, William Shakespeare, Luis de Camões",
    ayuda: "Uno es un escrito Español, otro es un escrito Inglés y otro es un escritor Portugues",
    distractores: [
        "Jorge Isaac, José Martí, Eduardo Blanco",
        "Leonardo da Vinci, Miguel Angel Buonarroti, Sandro Boticelli",
        "Goethe, Victor Hugo, Gustavo Adolfo Bécquer"
    ], 
    },
    {
    pregunta: "¿Quién pintó la obra (Guernica)?",
    respuesta: "Pablo Picasso",
    ayuda: "Nacio en 1881 - 1973",
    distractores: [
        "Frida Kahlo",
        "Paul Cézanne",
        "Diego Rivera"
    ], 
    },
    {
    pregunta: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
    respuesta: "8 minutos",
    ayuda: "Se calcula dividiendo la distancia que hay entre el Sol y la Tierra, aproximadamente 150 000 000 km, entre la velocidad de la luz, que es 300 000 km/s",
    distractores: [
        "8 segundos",
        "12 minutos",
        "12 horas"
    ], 
    },
    {
    pregunta: "¿Cuál es la traducción correcta de la frase (There is a green carpet at the exit of the library)?",
    respuesta: "Hay una alfombra verde a la salida de la biblioteca.",
    ayuda: "Library se parece a librería pero en realidad es Biblioteca.",
    distractores: [
        "Hay una carpeta verde a la salida de la biblioteca",
        "Ahí es una verde carpeta en el éxito de la librería",
        "Hay una alfombra verde a la salida de la librería"
    ], 
    },
    {
    pregunta: "¿Cuál es la nacionalidad de Jorge Mario Bergoglio?",
    respuesta: "Argentina",
    ayuda: "Es el segundo país más extenso de América del Sur y limita al oeste con Chile",
    distractores: [
        "Mexicana",
        "Cubana",
        "Española"
    ], 
    },
    {
    pregunta: "¿Cuáles son los tres predadores del reino animal reconocidos por:" + "\n1) habilidad de cazar en grupo" + "\n2) camuflajearse para sorprender a su presa" + "\n3) poseer sentidos refinados?",
    respuesta: "1) Hiena; 2) Oso polar; 3) Lobo gris",
    ayuda: "Piensa",
    distractores: [
        "1) Tigre; 2) águila; 3) gato",
        "1) León; 2) tiburón blanco; 3) orca",
        "1) Cobra; 2) zorro; 3) cocodrilo"
    ], 
    },
    {
    pregunta: "¿Cuál es la altura de la red de voleibol en los juegos masculino y femenino?",
    respuesta: "2,43 m y 2,24 m",
    ayuda: "Piensa",
    distractores: [
        "2,45 m y 2,15 m",
        "1,8 m y 1,5 m",
        "2,4 m para ambos"
    ], 
    },
    {
    pregunta: "¿En qué orden se presentaron los modelos atómicos?",
    respuesta: "Dalton, Thomson, Rutherford, cuántico",
    ayuda: "Piensa",
    distractores: [
        "Bohr, Rutherford, cuántico, Einstein",
        "Rutherford, Dalton, Thomson, cuántico",
        "Thomson, Dalton, Rutherford, Bohr"
    ], 
    },
    {
    pregunta: "¿En qué periodo de la prehistoria fue descubierto el fuego?",
    respuesta: "Paleolítico",
    ayuda: "La era fue cuando aprendieron que era posible producir fuego al frotar pedazos de madera y piedra",
    distractores: [
        "Edad media",
        "Neolítico",
        "Edad de piedra"
    ], 
    },
    {
    pregunta: "¿A quién se le atribuye la frase (Solo sé que no sé nada)?",
    respuesta: "Sócrates",
    ayuda: "Es un filosofo griego",
    distractores: [
        "Salomón",
        "Aristóteles",
        "Sófocles"
    ], 
    },
    {
    pregunta: "¿Cuál es la montaña más alta del continente americano?",
    respuesta: "Aconcagua",
    ayuda: "No es everest",
    distractores: [
        "Monte Fuji",
        "Pico Bolívar",
        "Pico Neblina"
    ], 
    },
    {
    pregunta: "¿Cuál es la velocidad de la luz?",
    respuesta: "299 792 458 metros por segundo",
    ayuda: "Es igual a 1080 millones de kilómetros por hora.",
    distractores: [
        "350 000 000 metros por segundo",
        "300 000 000 metros por segundo",
        "199 792 458 metros por segundo"
    ], 
    },
    {
    pregunta: "¿Cuál es la categoría de los premios Nobel que ha recibido más galardones?",
    respuesta: "Física",
    ayuda: "Es una materia de fórmulas",
    distractores: [
        "Matematica",
        "Química",
        "Biologia"
    ], 
    },
    {
    pregunta: "¿Cuáles son los nombres de los tres reyes magos?",
    respuesta: "Gaspar, Melchor y Baltazar",
    ayuda: "Son las personalidades que visitaron al niño Jesus cuando nació, ofreciéndole regalos como oro, incienso y mirra.",
    distractores: [
        "Abraham, Noé y Moises",
        "Gaspar, Nicolas y Nataniel",
        "Charles, George y Louis"
    ], 
    },
    {
    pregunta: "¿Cuál es la persona más joven en ganar un premio Nobel?",
    respuesta: "Malala Yousafzai",
    ayuda: "Lo ganó en el 2014 cuando tenía 17 años",
    distractores: [
        "Kelvin Doe",
        "Shirley Temple",
        "Ana Frank"
    ], 
    },
    {
    pregunta: "¿Cuál es la capital de Mongolia?",
    respuesta: "Ulán Bator",
    ayuda: "Piensa",
    distractores: [
        "Katmandú",
        "Daca",
        "Muharin Den"
    ], 
    },
    {
    pregunta: "¿La frase Carpe diem significa:?",
    respuesta: "Aprovecha el día",
    ayuda: "La frase Carpe diem es una expresión latina, atribuida al poeta romano Horacio (55a.C.-8 a.C.)",
    distractores: [
        "Un movimiento revolucionario",
        "Un movimiento científico",
        "Un movimiento espiritual"
    ], 
    },
    {
    pregunta: "¿La canción Libertango fue compuesta por:?",
    respuesta: "Astor Piazzolla",
    ayuda: "Es un compositor argentino",
    distractores: [
        "Carlos Gardel",
        "Anibal Troilo",
        "Alvaro Carrillo"
    ], 
    },
    {
    pregunta: "¿Carlos Cruz-Diez fue:?",
    respuesta: "Artista cinético",
    ayuda: "Tiene muchas obras crómaticas",
    distractores: [
        "Artista cubista",
        "Director de cine",
        "Escritor de ensayos"
    ], 
    },
    {
    pregunta: "¿Cuantas maravillas hay en el mundo?",
    respuesta: "7",
    ayuda: "Numero de la suerte",
    distractores: [
        "8",
        "6",
        "9"
    ], 
    },
    {
    pregunta: "¿El número romano MDCLXVI corresponde a:?",
    respuesta: "1666",
    ayuda: "Piensa",
    distractores: [
        "1000100",
        "6661",
        "1551"
    ], 
    },
    {
    pregunta: "¿El director de la única película mexicana en ganar un premio Oscar como mejor película extranjera es:?",
    respuesta: "Alfonso Cuarón",
    ayuda: "Ganó el premio a mejor director en el 2018.",
    distractores: [
        "Diego Luna",
        "Ricardo Goicochea",
        "Guillermo del Toro"
    ], 
    }
];