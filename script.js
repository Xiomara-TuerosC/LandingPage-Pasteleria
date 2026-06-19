function accionBoton(tipo) {
  switch(tipo) {

    case 'stock':
      document.getElementById("modalStock").style.display = "block";
      break;

    case 'delivery':
      document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
      });
      break;

    case 'personalizado':
      document.getElementById("modalPersonalizado").style.display = "block";
      break;

    default:
      console.log("Botón no reconocido");
  }


  const modal = document.getElementById("modalStock");
const cerrar = document.querySelector(".cerrar");

if (cerrar) {
  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const modalPersonalizado = document.getElementById("modalPersonalizado");
const cerrarPersonalizado = document.querySelector(".cerrarPersonalizado");

if (cerrarPersonalizado) {
  cerrarPersonalizado.addEventListener("click", function () {
    modalPersonalizado.style.display = "none";
  });
}

window.addEventListener("click", function (e) {
  if (e.target === modalPersonalizado) {
    modalPersonalizado.style.display = "none";
  }
});


}// ===============================
// RELOJ
// ===============================

function actualizarReloj() {
    const ahora = new Date();

    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fecha = ahora.toLocaleDateString('es-ES', opciones);
    const hora = ahora.toLocaleTimeString('es-ES');

    const reloj = document.getElementById("clockdisplay");

    if (reloj) {
        reloj.innerHTML = `${fecha} | ${hora}`;
    }
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


// ===============================
// CONTADOR DE VISITAS
// ===============================

let visitas = localStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

const contador = document.getElementById("counter-display");

if (contador) {
    contador.textContent = visitas;
}


// ===============================
// SLIDER DE IMÁGENES
// ===============================

const slides = document.querySelectorAll(".slide");

let indice = 0;

function cambiarImagen() {

    slides[indice].classList.remove("active");

    indice++;

    if (indice >= slides.length) {
        indice = 0;
    }

    slides[indice].classList.add("active");
}

// Cambia cada 3 segundos
setInterval(cambiarImagen, 3000);


