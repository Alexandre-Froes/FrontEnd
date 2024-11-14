function aumentarVoto(numVoto) {
    numVoto.innerHTML = parseInt(numVoto.innerHTML) + 1;
}

var mickey = document.getElementById('imgCandidatoMickey');
var minnie = document.getElementById('imgCandidatoMinnie');
var pluto = document.getElementById('imgCandidatoPluto');
var pateta = document.getElementById('imgCandidatoPateta');

var mickeyVoto = document.getElementById('numVotosMickey');
var minnieVoto = document.getElementById('numVotosMinnie');
var plutoVoto = document.getElementById('numVotosPluto');
var patetaVoto = document.getElementById('numVotosPateta');

mickey.addEventListener('click', function() {aumentarVoto(mickeyVoto)});
minnie.addEventListener('click', function() {aumentarVoto(minnieVoto)});
pluto.addEventListener('click', function() {aumentarVoto(plutoVoto)});
pateta.addEventListener('click', function() {aumentarVoto(patetaVoto)});