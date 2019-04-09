const array = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

document.getElementById("codificar").addEventListener('click', () => {
  let chaveCodificar = parseInt(document.querySelector("#chaveCodificar").value);
  let textoCodificar = document.getElementById("textoCodificar").value.toLowerCase();
  let resultado = [];

  for (let i = 0; i < textoCodificar.length; i++) {
    for (let v = 0; v < array.length; v++){
      if(textoCodificar[i]==array[v]){
          let posicao = array.indexOf(array[v]) + chaveCodificar;
          resultado[v] =  array[posicao];
          console.log(resultado[v]);
      }
    }
  }
   // document.getElementById("resultado").innerHTML = resultado;
});


document.getElementById("Decodificar").addEventListener('click', () => {
  let chaveDecodificar = parseInt(document.querySelector("#chaveDecodificar").value);
  let textoDecodificar = document.getElementById("textoDecodificar").value.toLowerCase();
  let resultado = [];

  for (let i = 0; i < textoDecodificar.length; i++) {
    for (let v = 0; v < array.length; v++){
      if(textoDecodificar[i]==array[v]){
          let posicao = array.indexOf(array[v]) - chaveDecodificar;
          resultado[v] =  array[posicao];
          console.log(resultado[v]);
      }
    }
  }
   document.getElementById("resultado").innerHTML = resultado.join(".");
});
