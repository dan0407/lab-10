let ya = []
for(let i = 0; i < data.length; i++) {
    const peliculas1 = data[i]
    const p = new Peliculas( 
        peliculas1.titulo, 
        peliculas1.sinopsis, 
        peliculas1.Image, 
        
            )
            ya.push(p)

            
}     
function renderAllya(peli) {
    let container = document.getElementById("t")
    container.innerHTML = ""
    for(let i = 0; i < peli.length; i++) {
        const pe = peli[i]
        container.innerHTML += pe.toHtml(i)
    }
} 
renderAllya(ya)

function peliculasSelected(position) {
    const p = ya[position]
    console.log(p)
     console.log(document.getElementById("tt"))
    document.getElementById("titulo1").innerHTML=p.titulo
document.getElementById("contenido").innerHTML=p.sinopsis
document.getElementById("tt").src = p.Image



}


