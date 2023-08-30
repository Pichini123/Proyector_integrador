//Menu hamburguesa!!
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
//formulario alta

//tarjetas dinamicas de los juegos
class Juego {
    constructor(portada, consola, genero, titulo, precio) {
        this.portada = portada;
        this.consola = consola;
        this.genero = genero;
        this.titulo = titulo;
        this.precio = precio;
    }

    getHtmlArticle() {
        return `
        <article class="tarjeta">
            <picture id="portada" class="juego">
                <img src="${this.portada}" alt="${this.titulo}">
            </picture>
            
            <div class="info">
                <p class="tipodeconsola">${this.consola}</p>
                <p>${this.genero}</p>
            </div>
            
            <div class="infoJuego">
                <h4>${this.titulo}</h4>
                <h5>${this.precio}</h5>
            </div>
            
            <button class="botoncompra" type="submit">Comprar</button>
        </article>`;
    }
}
const juego1 = new Juego(
    "img/Bloodborne.jpg",
    "PS4",
    "Acción/Soulike",
    "Bloodborne",
    "$29.99");
    const juego2 = new Juego(
        "img/DaysGone.jpg",
        "PS4",
        "Acción/Supervivencia",
        "Days Gone",
        "$24.99");
        const juego3 = new Juego(
            "img/godofwar.png",
            "PS4",
            "Acción/Aventura",
            "God Of War",
            "$9.99");
            const juego4 = new Juego(
                "img/Spiderman.jpg",
                "PS4",
                "Acción/Mundo Abierto",
                "Spiderman",
                "$14.99");
        
let juegosNuevos = document.getElementById('juegos');

let titulosNuevos =juego1.getHtmlArticle()+
                   juego2.getHtmlArticle()+
                   juego3.getHtmlArticle()+
                   juego4.getHtmlArticle();

juegosNuevos.innerHTML += titulosNuevos;
