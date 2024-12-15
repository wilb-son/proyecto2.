
//hola //
const librosColeccionJSON=[
    {   "Nombre":"11 minutos",
        "CantidadDePaginas":180, 
        "Autor":"paulo coelho",
        "Género":["Novela, Ficción"],
        "disponible":true
    },
    {
        "Nombre":"el alquimista",
        "CantidadDePaginas":"240",
        "Autor":"paulo coelho",
        "Género":"Novela, Drama, Misión, Literatura fantástica, Ficción de aventuras",
        "disponible":false
    }
    ]
    function informacionLibro(libro ) {
        let disponibilidad;
    
    // Verificamos si el libro está disponible
    if (libro.disponible) {
        // Si está disponible, asignamos el mensaje correspondiente
        disponibilidad = "se encuentra disponible";
    } else {
        // Si no está disponible, asignamos un mensaje diferente
        disponibilidad = "no se encuentra disponible";
    }

        
        console.log("El libro " + libro.Nombre + ", tiene " + libro.CantidadDePaginas + " páginas, fue escrito por " + libro.Autor + " y es del género " + libro.Género + " y " + disponibilidad + ".");
    
    
    }

function  imprimirLibros(arregloLibros) {
    for (let i = 0; i < arregloLibros.length; i++) {
        const libro = arregloLibros[i];
       informacionLibro(libro);
    }

};
const nuevoLibro={
    "Nombre":"el codigo da vinci",
    "CantidadDePaginas":656,
    "Autor":"dan brown,Maria Jose Diaz Perez,Claudia Conde",
    "Género":" Novela, Thriller, Ficción detectivesca, Misterio, Policial, ficción conspirativa",
    "disponible":true
}
function  agregarLibro(librosColeccionJSON,nuevoLibro) {
    librosColeccionJSON.push(nuevoLibro);
}


agregarLibro(librosColeccionJSON,nuevoLibro);



imprimirLibros(librosColeccionJSON);

 
