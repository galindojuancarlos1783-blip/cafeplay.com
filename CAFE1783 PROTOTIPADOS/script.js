function mostrar(id) {
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Mostrar inicio al cargar
mostrar('inicio');
