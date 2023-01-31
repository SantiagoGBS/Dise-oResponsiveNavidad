let superior__img=document.getElementById("superior__img");
let favorites=document.getElementById("favorites");

const traermenu=()=>{
    favorites.classList.remove("favorites");
    favorites.classList.add("favorites__images");
}
const quitarvisor=()=>{
    favorites.classList.add("favorites__cambio")
}
superior__img.addEventListener("click", traermenu);
favorites.addEventListener("animationend", quitarvisor);
// tendria que quitar la clase favorites__images y que esa no fuese la que da el movimiento. Y luego volverla a poner pero no me da tiempo. 