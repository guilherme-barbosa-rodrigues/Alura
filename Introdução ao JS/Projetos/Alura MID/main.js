function tocaSom(idElementoAudio) {
   document.querySelector(idElementoAudio).play()
}
const listaDeTecla = document.querySelectorAll('.tecla');

listaDeTecla[0].onclick = tocaSom;

let contator = 0
while (contator < listaDeTecla.length) {
    const intrumento = listaDeTecla[contator].classList[contator+1]
    listaDeTecla[contator].onclick = function(){
        tocaSom('')
    }
    contator++
}