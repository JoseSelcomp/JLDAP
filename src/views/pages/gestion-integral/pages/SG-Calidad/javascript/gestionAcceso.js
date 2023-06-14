var enlaceHumana = document.getElementById('enlace-humana');
var enlaceCalidad = document.getElementById('enlace-calidad');
var enlaceAprovisionamiento = document.getElementById('enlace-aprovisionamiento');
var enlaceFinanciera = document.getElementById('enlace-financiera');
var enlaceComercial = document.getElementById('enlace-comercial');
var enlaceOperaciones = document.getElementById('enlace-operaciones');
var enlaceEstrategica = document.getElementById('enlace-estrategica');
var warning = document.getElementById('aviso');

// Agrega un evento de clic al enlace
enlaceHumana.addEventListener('click', function(event) {
// Verifica las condiciones y muestra el mensaje de aviso si es necesario
if ("<%= group %>" !== "Depto Humana" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault(); // Evita la acción predeterminada del enlace (redirección)
    console.log('No tiene permiso para acceder a estos documentos');
    // Aquí puedes agregar el código para mostrar el cuadro de aviso en el frontend
    warning.style.display = 'block';
    warning.style.opacity = '1';
    if(warning.style.display = 'block' && warning.style.opacity <= '1'){
    warning.style.display = 'block';
    warning.style.opacity = '1';
    // Establece un temporizador para ocultar el aviso después de unos segundos
    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
}
});

enlaceCalidad.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Calidad" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    console.log('No tiene permiso para acceder a estos documentos');
    warning.style.display = 'block';
    warning.style.opacity = '1';
    if(warning.style.display = 'block' && warning.style.opacity <= '1'){
    warning.style.display = 'block';
    warning.style.opacity = '1';

    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
}
});

enlaceAprovisionamiento.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Aprovisionamiento" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    console.log('No tiene permiso para acceder a estos documentos');
    warning.style.display = 'block';
    warning.style.opacity = '1';
    if(warning.style.display = 'block' && warning.style.opacity <= '1'){
    warning.style.display = 'block';
    warning.style.opacity = '1';

    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
}
});

enlaceFinanciera.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Financiera" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    console.log('No tiene permiso para acceder a estos documentos');
    warning.style.display = 'block';
    warning.style.opacity = '1';
    if(warning.style.display = 'block' && warning.style.opacity <= '1'){
    warning.style.display = 'block';
    warning.style.opacity = '1';

    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
}
});

enlaceComercial.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Comercial" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    warning.style.display = 'block';
    warning.style.opacity = '1';

    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
});

var warningTimeout = null; // Variable global para almacenar el temporizador

enlaceOperaciones.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Operaciones" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    console.log('No tiene permiso para acceder a estos documentos');

    if (!warningTimeout) {
    // Si no hay un temporizador en curso, muestra el aviso y establece un nuevo temporizador
    warning.style.display = 'block';
    warning.style.opacity = '1';

    warningTimeout = setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function() {
        warning.style.display = 'none';
        }, 1000);
        warningTimeout = null; // Restablece la variable del temporizador
    }, 2000);
    }
}
});



enlaceEstrategica.addEventListener('click', function(event) {
if ("<%= group %>" !== "Depto Estrategica" && "<%= group %>" !== "Depto Tecnologia") {
    event.preventDefault();
    console.log('No tiene permiso para acceder a estos documentos');
    warning.style.display = 'block';
    warning.style.opacity = '1';
    if(warning.style.display = 'block' && warning.style.opacity <= '1'){
    warning.style.opacity = '0';
    warning.style.display = 'none';
    warning.style.display = 'block';
    warning.style.opacity = '1';

    setTimeout(function() {
        warning.style.opacity = '0';
        setTimeout(function(){
        warning.style.display = 'none';
        }, 1000)
    }, 2000);
    }
}
});