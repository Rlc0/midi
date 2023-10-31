function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length) {
    const efeito = listaDeTeclas[cobtador].classList[1];
    const idaudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function ()
    {
        tocaSom(idaudio);
    }
    contador = contador + 1;
    console.log(contador);
}