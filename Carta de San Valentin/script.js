function mostrarSorpresa() {
    const sorpresa = document.getElementById("sorpresa");
    sorpresa.style.display = "block";
}

/* Música al primer clic */

document.addEventListener("click", function() {
    const musica = document.getElementById("musica");
    musica.play();
}, { once: true });

/* Corazones */

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 15 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

setInterval(crearCorazon, 300);


