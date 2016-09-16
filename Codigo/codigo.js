// Tarefa: deixar o numero 58 dentro do for dinamico, utilizando uma variavel baseada no tamanho do array alfabeto, e testar é claro


var alfabeto = [" ", ".", ",", ":", ";", "!", "?", "a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"];


var numeroMinimo = alfabeto.indexOf('a') - 1;


var $conteudoTexto = document.querySelector("#areaTexto");
var $conteudoCodigo = document.querySelector("#areaCodigo");
var $btnTexto = document.querySelector("#btnTexto");
var $btnCodigo = document.querySelector("#btnCodigo");
var $palavra = document.querySelector("#palavra-texto");
var $palavraCodificada = document.querySelector("#palavra-codificada");
var $chave = document.querySelector("#chave-texto");

function clickBtnTexto (botao, conteudo) {
  botao.addEventListener ("click", function(){
    event.preventDefault();
    var texto = conteudo.value;
    var textoSeparado = texto.split("");
    var textoMisturado = [];
    var chaveArray = [];

    for (i = 0; i < textoSeparado.length; i++){
      var numeroMagico = Math.floor((Math.random() * 58) + 1);
      
      if (numeroMagico > numeroMinimo) {
        var letraTexto = textoSeparado[i];
        var letraCodificada = alfabeto[numeroMagico];
        var chaveLetra = alfabeto.indexOf(letraTexto);

        textoMisturado.push(letraCodificada);
        chaveArray.push(chaveLetra);
      }
      else {
        i--;
      }
    }

    var textoCodificado = textoMisturado.join("");
    var chave = chaveArray.join(" ");

    $palavra.textContent = texto;
    $palavraCodificada.textContent = textoCodificado;
    $chave.textContent = chave;

    conteudo.value = "";
  });
}

function clickBtnCodigo (botao, conteudo) {
  botao.addEventListener ("click", function(){
    event.preventDefault();
    var codigo = conteudo.value;
    var codigoSeparado = codigo.split(" ");
    var textoArray = [];

    for (i = 0; i < codigoSeparado.length; i++) {
      var numeroCodigo = codigoSeparado[i];
      var letraOriginal = alfabeto[numeroCodigo];
      textoArray.push(letraOriginal);
    }

    var textoOriginal = textoArray.join("");

    $palavra.textContent = textoOriginal;
    $palavraCodificada.textContent = "";
    $chave.textContent = "";
  });
}

clickBtnTexto($btnTexto, $conteudoTexto);
clickBtnCodigo($btnCodigo, $conteudoCodigo);
