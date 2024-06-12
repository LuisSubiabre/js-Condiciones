var total = 0;


function contar() {
    total = Number(document.getElementById('sticker01').value) + Number(document.getElementById('sticker02').value) + Number(document.getElementById('sticker03').value)

    if (total >= 11) {
        mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = "Llevas demasiados stickers <img class='filter invert size-8' src='./assets/imgs/sad.png'>"
        mensaje.classList.remove('text-white');
        mensaje.classList.add('text-red-500');
    } else {
        mensaje.innerHTML = "Llevas: " + total + " stickers";
        mensaje.classList.remove('text-red-500');
        mensaje.classList.add('text-white');

    }
}