// Obtener elementos del DOM
const botonHamburguesa = document.querySelector('.boton-hamburguesa');
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const cerrarMenu = document.querySelector('.cerrar-menu');
const opcionesMenu = document.querySelectorAll('.menu-hamburguesa ul li a');
const submenus = document.querySelectorAll('.submenu');

const menuAbierto = document.getElementById('menu-desplegable');
const menuCerrado = document.getElementById('menu-estatico');

function menuDesplegable(){
  menuAbierto.style.display = 'block';
  menuCerrado.style.display = 'none';
}

function menuEstatico(){
  menuAbierto.style.display = 'none';
  menuCerrado.style.display = 'block';
}


// Función para ocultar los títulos del menú
function ocultarTitulos() {
  opcionesMenu.forEach(opcion => {
    const titulo = opcion.querySelector('span');
    titulo.classList.remove('mostrar-titulo');
  });
}

// Función para ocultar todos los submenús
function ocultarSubmenus() {
  submenus.forEach(submenu => submenu.classList.remove('mostrar-submenu'));
}

// Función para mostrar un submenú
function mostrarSubmenu(evento) {
  const submenu = evento.target.nextElementSibling;
  if (submenu && menuHamburguesa.classList.contains('mostrar-menu')) {
    evento.preventDefault();
    ocultarSubmenus();
    submenu.classList.add('mostrar-submenu');
    cambiarColorOpcion();
  }
}

// Función para mostrar el menú
function mostrarMenu() {
  menuHamburguesa.classList.add('mostrar-menu');
  botonHamburguesa.style.display = 'none';
  cerrarMenu.style.display = 'block';
  opcionesMenu.forEach(opcion => {
    const titulo = opcion.querySelector('span');
    titulo.classList.add('mostrar-titulo');
  });
}

// Función para ocultar el menú
function ocultarMenu() {
  menuHamburguesa.classList.remove('mostrar-menu');
  botonHamburguesa.style.display = 'block';
  cerrarMenu.style.display = 'none';
  ocultarSubmenus();
  ocultarTitulos();
}

// Evento para mostrar el menú al hacer clic en el botón hamburguesa
botonHamburguesa.addEventListener('click', mostrarMenu);

// Evento para ocultar el menú al hacer clic en el botón cerrar
cerrarMenu.addEventListener('click', ocultarMenu);

// Evento para mostrar y ocultar los submenús
opcionesMenu.forEach(opcion => {
  opcion.addEventListener('click', function(evento) {
    const submenu = opcion.nextElementSibling;
    if (menuHamburguesa.classList.contains('mostrar-menu')) {
      if (submenu && submenu.classList.contains('submenu')) {
        evento.preventDefault();
        if (submenu.classList.contains('mostrar-submenu')) {
          submenu.classList.remove('mostrar-submenu');
        } else {
          ocultarSubmenus();
          submenu.classList.add('mostrar-submenu');
        }
      }
    }
  });
  
});

// Evitar que se cierren los submenús al hacer clic en ellos
submenus.forEach(submenu => {
  submenu.addEventListener('click', function(evento) {
    evento.stopPropagation();
  });
});

// Evitar que se abran submenús si el menú está cerrado
opcionesMenu.forEach(opcion => {
  opcion.addEventListener('click', function(evento) {
    const submenu = opcion.nextElementSibling;
    if (!menuHamburguesa.classList.contains('mostrar-menu') && submenu && submenu.classList.contains('submenu')) {
      evento.preventDefault();
    }
  });
});

// Ocultar los submenús y títulos del menú al hacer clic fuera del menú
document.addEventListener('click', function(evento) {
  if (!evento.target.closest('.menu-hamburguesa') && menuHamburguesa.classList.contains('mostrar-menu')) {
    menuEstatico();
    ocultarMenu();
  }
});
