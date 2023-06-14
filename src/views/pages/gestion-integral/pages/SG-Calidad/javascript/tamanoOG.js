function ajustarTamano() {
    var contenedor = document.querySelector('.contenedor-categoria');
    var elementos = contenedor.querySelectorAll('.opcion');
    
    if (elementos.length <= 4) {
      contenedor.style.width= '50%';
    } else if (elementos.length > 4 && elementos.length <=6){
      contenedor.style.width = '60%';
    }else if (elementos.length > 6 && elementos.length <=7){
      contenedor.style.width = '90%';
    }else{
      contenedor.style.width = '95%';
    }
  }

ajustarTamano();



