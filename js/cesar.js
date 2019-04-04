const array = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

document.getElementById("codificar").addEventListener('click', () => {
  var chaveCodificar = document.querySelector("#chaveCodificar").value;
  var textoCodificar = document.getElementById("textoCodificar").value.toUpperCase();
  var resultado = "";

  for (var i = 0; i < textoCodificar.length; i++) {
    var posicionamentoDaLetra = textoCodificar.charCodeAt(i) - 64;
    var deslocamentoDaLetra = (posicionamentoDaLetra + chaveCodificar) % 26;
    resultado += array[deslocamentoDaLetra - 1];
  }
  document.getElementById("resultado").innerHTML = resultado;
});


document.getElementById("Descodificar").addEventListener('click', () => {
  var chaveDecodificar = document.querySelector("#chaveDecodificar").value;
  var textoDecodificar = document.getElementById("textoDecodificar").value.toUpperCase();
  var resultado = "";

  for (var i = 0; i < textoDecodificar.length; i++) {
    var posicionamentoDaLetra = textoDecodificar.charCodeAt(i) - 64;
    var deslocamentoDaLetra = (posicionamentoDaLetra - chaveDecodificar) % 26;
    resultado += array[deslocamentoDaLetra - 1];
  }
  document.getElementById("resultado").innerHTML = resultado;
});
