const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('ativo');
}

function click_sobre() {
    container = document.querySelector('.container-sobre');
    container.classList.toggle('sobre-ativado');
}