const array = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

//função para Codificar o texto
document.getElementById("codificar").addEventListener('click', () => {
    let chaveCodificar = parseInt(document.querySelector("#chaveCodificar").value);
    let textoCodificar = document.getElementById("textoCodificar").value.toLowerCase();
    let resultado = " ";

    for (let i = 0; i < textoCodificar.length; i++) {
        if (textoCodificar.charAt(i) == " ") {
            resultado += " ";
        } else {
            for (let v = 0; v < array.length; v++) {
                if (textoCodificar.charAt(i) == array[v]) {
                    let posicao = array.indexOf(array[v]) + chaveCodificar;
                    if (posicao > 25) {
                        let tratamento = posicao - 26;
                        resultado += array[tratamento];
                    } else {
                        resultado += array[posicao];
                        // console.log(resultado[v]);
                    }
                }
            }
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
});


//função para Decodificar o texto
document.getElementById("decodificar").addEventListener('click', () => {
    let chaveDecodificar = parseInt(document.querySelector("#chaveDecodificar").value);
    let textoDecodificar = document.getElementById("textoDecodificar").value.toLowerCase();
    let resultado = " ";

    for (let i = 0; i < textoDecodificar.length; i++) {
        if (textoDecodificar.charAt(i) == " ") {
            resultado += " ";
        } else {
            for (let v = 0; v < array.length; v++) {
                if (textoDecodificar.charAt(i) == array[v]) {
                    let posicao = array.indexOf(array[v]) - chaveDecodificar;
                    if (posicao < 0) {
                        let tratamento = posicao + 26;
                        resultado += array[tratamento];
                    } else {
                        resultado += array[posicao];
                        // console.log(resultado[v]);
                    }
                }
            }
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
});
