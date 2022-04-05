export function pintarCanciones(resultado){

    let baseDiv=document.getElementById("base")

    console.log(baseDiv)

    resultado.tracks.forEach(function(tracks){

   // resultado.tracks.forEach(tracks=>{
        
       


        let columna=document.createElement("div")

        columna.classList.add("col")

        

        let tarjeta=document.createElement("div")

        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let nombre=document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.classList.add("text-primary")
        nombre.textContent=tracks.name

        let direccion=document.createElement("audio")
        direccion.src=tracks.preview_url
        direccion.setAttribute("controls","controls")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src=tracks.album.images[0].url
        


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(direccion)
        
        
        
        columna.appendChild(tarjeta)
        baseDiv.appendChild(columna)
    })

}
