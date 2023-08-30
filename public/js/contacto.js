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

//////////////////////////////nombre validacion
const nombreF = document.getElementById('nombre');

// Quita la validación mientras escribes
nombreF.addEventListener('input', () => {
    // Quita el mensaje según escribes
    nombreF.setCustomValidity('');
    // Comprueba si debe validarlo
    nombreF.checkValidity();
    
});

// Muestra el mensaje de validación
nombreF.addEventListener('invalid', () => {
    nombreF.setCustomValidity("Falta nombre completar");
});

///////////////////////////////////////////////////////////////////email
const emailF = document.getElementById('email');

// Quita la validación mientras escribes
emailF.addEventListener('input', () => {
    // Quita el mensaje según escribes
    emailF.setCustomValidity('');
    // Comprueba si debe validarlo
    emailF.checkValidity();
});

// Muestra el mensaje de validación
emailF.addEventListener('invalid', () => {
    emailF.setCustomValidity('No es un correo valido');
});
