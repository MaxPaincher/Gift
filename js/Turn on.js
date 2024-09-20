document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");

    setTimeout(function() {
        message.classList.remove("hidden");
        message.classList.add("visible");

        // Esperar 2 segundos antes de desvanecer
        setTimeout(function() {
            message.classList.remove("visible");
            message.classList.add("hidden");
        }, 2000); // Tiempo que el mensaje permanece visible

    }, 3000); // Espera 2 segundos antes de mostrar el mensaje
});

document.getElementById("cinn").addEventListener("click", function() {
    const cinn2 = document.getElementById("cinn2");
    
    // Muestra el segundo div
    cinn2.classList.remove("hidden");
    cinn2.classList.add("jump");
});

document.getElementById("cinn2").addEventListener("click", function() {
    const cinn3 = document.getElementById("cinn3");
    
    // Muestra el tercer div
    cinn3.classList.remove("hidden");
    cinn3.classList.add("slide-in")
});

document.getElementById("cinn3").addEventListener("click", function() {
    const cinn4 = document.getElementById("cinn4");

    // Muestra el cuarto div
    cinn4.classList.remove("hidden");
});
// Nueva funcionalidad para ocultar imágenes y mostrar el texto final
document.getElementById("cinn4").addEventListener("click", function() {
    const images = [document.getElementById("cinn"), document.getElementById("cinn2"), document.getElementById("cinn3"), document.getElementById("cinn4")];
    const textEnd = document.getElementById("textEnd");

    // Oculta todas las imágenes
    images.forEach(img => img.classList.add("hidden"));

    // Muestra el texto final
    textEnd.classList.remove("hidden");
});

// Funcionalidad para ocultar textEnd y mostrar textEnd2
document.getElementById("textEnd").addEventListener("click", function() {
    const textEnd = document.getElementById("textEnd");
    const textEnd2 = document.getElementById("textEnd2");

    // Oculta el primer texto y muestra el segundo
    textEnd.classList.add("hidden");
    textEnd2.classList.remove("hidden");
});
