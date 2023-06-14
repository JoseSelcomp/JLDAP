$(document).ready(function(){
    $('li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
})


const tabla_1 = document.getElementById('tabla_1');
const tabla_2 = document.getElementById('tabla_2');
const tabla_3 = document.getElementById('tabla_3');
const tabla_4 = document.getElementById('tabla_4');
const tabla_5 = document.getElementById('tabla_5');

function focusTabla1(){
    tabla_1.style.display = 'block';
    tabla_2.style.display = 'none';
    tabla_3.style.display = 'none';
    tabla_4.style.display = 'none';
    tabla_5.style.display = 'none';
}

function focusTabla2(){
    tabla_1.style.display = 'none';
    tabla_2.style.display = 'block';
    tabla_3.style.display = 'none';
    tabla_4.style.display = 'none';
    tabla_5.style.display = 'none';
}

function focusTabla3(){
    tabla_1.style.display = 'none';
    tabla_2.style.display = 'none';
    tabla_3.style.display = 'block';
    tabla_4.style.display = 'none';
    tabla_5.style.display = 'none';
}

function focusTabla4(){
    tabla_1.style.display = 'none';
    tabla_2.style.display = 'none';
    tabla_3.style.display = 'none';
    tabla_4.style.display = 'block';
    tabla_5.style.display = 'none';
}

function focusTabla5(){
    tabla_1.style.display = 'none';
    tabla_2.style.display = 'none';
    tabla_3.style.display = 'none';
    tabla_4.style.display = 'none';
    tabla_5.style.display = 'block';
}