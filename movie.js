class Peliculas {
    constructor(titulo, sinopsis, Image, rating) {
        this.titulo = titulo
        this.sinopsis = sinopsis
        this.Image = Image
       
        }




        toHtml(position) {
            return `<div class="pelicula" onclick='peliculasSelected(${position})'>
            <a href="#"><img src="${this.Image}" alt=""></a>
           
        </div>
     `}
}