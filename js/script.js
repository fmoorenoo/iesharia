// menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


function mostrarFP(fp) {
    document.getElementById("basica").classList.add("hidden");
    document.getElementById("fpbasica").classList.remove("girar");

    document.getElementById("media").classList.add("hidden");
    document.getElementById("fpmedia").classList.remove("girar");

    document.getElementById("superior").classList.add("hidden");
    document.getElementById("fpsuperior").classList.remove("girar");

    if (fp === "basica") {
        document.getElementById("basica").classList.remove("hidden");
        document.getElementById("fpbasica").classList.add("girar");
    } else if (fp === "media") {
        document.getElementById("media").classList.remove("hidden");
        document.getElementById("fpmedia").classList.add("girar");
    } else if (fp === "superior") {
        document.getElementById("superior").classList.remove("hidden");
        document.getElementById("fpsuperior").classList.add("girar");
    }
}


function mostrarProyecto(id) {
    let proyectos = document.querySelectorAll('.datos-proyecto');
    let imagenesProyectos = document.querySelector('.imagenes-proyectos');
    
    if (id === 'quitar') {
        proyectos.forEach(proyecto => proyecto.classList.add('hidden'));
        imagenesProyectos.classList.remove('hidden');
    } else {
        proyectos.forEach(proyecto => proyecto.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
        imagenesProyectos.classList.add('hidden');
    }
}
