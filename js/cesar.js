const array = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

document.getElementById("codificar").addEventListener('click', () => {
  let chaveCodificar = document.querySelector("#chaveCodificar").value;
  let textoCodificar = document.getElementById("textoCodificar").value.toUpperCase();
  let resultado = "";

  for (var i = 0; i < textoCodificar.length; i++) {

    var posicionamentoDaLetra = textoCodificar.charCodeAt(i)-64; //posição da letra no alfabeto
    var deslocamentoDaLetra = (posicionamentoDaLetra + parseInt(chaveCodificar)) % 26; //deslocamento da letra para cifra de cesar e se mantem dentro das 26 letras
    resultado += array[deslocamentoDaLetra - 1];
  }
   document.getElementById("resultado").innerHTML = resultado;
});


// document.getElementById("Decodificar").addEventListener('click', () => {
//   var chaveDecodificar = document.querySelector("#chaveDecodificar").value;
//   var textoDecodificar = document.getElementById("textoDecodificar").value.toUpperCase();
//   var resultado = "";
//
//   for (var i = 0; i < textoDecodificar.length; i++) {
//     var posicionamentoDaLetra = textoDecodificar.charCodeAt(i) - 64;
//     var deslocamentoDaLetra = (posicionamentoDaLetra - parseInt(chaveDecodificar)) % 26;
//     resultado += array[deslocamentoDaLetra - 1];
//   }
//   document.getElementById("resultado").innerHTML = resultado;
// });
