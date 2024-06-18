const menu = document.getElementById('menu');
const stickyOffset = 50;


window.addEventListener('scroll', () => {
    if (window.scrollY >= stickyOffset) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
});

function mostrarmodulo(id) {
    let modulos = document.querySelectorAll('.datos-modulo');
    let imagenesmodulos = document.querySelector('.imagenes-modulos');
    
    if (id === 'quitar') {
        modulos.forEach(modulo => modulo.classList.add('hidden'));
        imagenesmodulos.classList.remove('hidden');
    } else {
        modulos.forEach(modulo => modulo.classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
        imagenesmodulos.classList.add('hidden');
    }
}