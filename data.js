// Obtén referencias a los elementos del DOM que necesitarás
const peliculasRecomendadas = document.querySelectorAll('.peliculas-recomendadas .pelicula');
const peliculaPrincipal = document.querySelector('.pelicula-principal');
const tituloPeliculaPrincipal = peliculaPrincipal.querySelector('.titulo');
const descripcionPeliculaPrincipal = peliculaPrincipal.querySelector('.descripcion');

// Define una función para cambiar el banner cuando se hace clic en una película recomendada
function cambiarBanner(event) {
    // Obtén la imagen y la descripción de la película recomendada que se hizo clic
    const imagenPelicula = event.currentTarget.querySelector('img');
    const descripcionPelicula = event.currentTarget.querySelector('p');

    // Actualiza el banner principal con la imagen y la descripción de la película recomendada
    peliculaPrincipal.style.backgroundImage = `url(${imagenPelicula.src})`;
    tituloPeliculaPrincipal.textContent = descripcionPelicula.textContent;
}

// Agrega un controlador de eventos de clic a cada película recomendada
peliculasRecomendadas.forEach((pelicula) => {
    pelicula.addEventListener('click', cambiarBanner);
});
