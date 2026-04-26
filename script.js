// FUNCIÓN PARA CAMBIAR SECCIONES
function mostrarSeccion(id) {

    // 1. Selecciona todas las secciones
    const secciones = document.querySelectorAll('section');

    // 2. Oculta todas
    secciones.forEach(sec => sec.classList.remove('active'));

    // 3. Busca la sección que queremos mostrar
    const activa = document.getElementById(id);

    // 4. La muestra
    if (activa) {
        activa.classList.add('active');
    }
}


// FUNCIÓN DEL FORMULARIO
function enviarFormulario(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Obtiene el nombre
    const nombre = document.getElementById('nombre').value;

    // Muestra mensaje
    document.getElementById('mensajeEnviado').innerText =
        "Gracias " + nombre + ", tu mensaje ha sido enviado.";
}