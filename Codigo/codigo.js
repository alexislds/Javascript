//Cria um array "alfabeto"
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"]
//Pega a palavra a ser codificada
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
      var numeroMagico = Math.floor((Math.random() * 51) + 1);
      var letraTexto = textoSeparado[i];
      var letraCodificada = alfabeto[numeroMagico];
      var chaveLetra = alfabeto.indexOf(letraTexto);

      textoMisturado.push(letraCodificada);
      chaveArray.push(chaveLetra);
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
    
    console.log(codigoSeparado);
  });
}

clickBtnTexto($btnTexto, $conteudoTexto);
clickBtnCodigo($btnCodigo, $conteudoCodigo);



//Separa os caracteres da palavra
// var conteudoSeparado = $conteudoTexto.split("");
// //Cria as arrays onde armazenaram as letras codificadas e chave
// var conteudoMisturado = [];
// var chave = [];
//
// //Cria um loop de criar letra por letra baseando nas quantidades de caracteres existentes na palavra a ser codificada
// //Utitliza um numero randomico para criar a aleatoridade de qual letra vai ser escolhida do nosso objeto alfabeto
// //Armazena as letras e chaves nas arrays criadas acima var chave e var conteudoMisturado
// for (i = 0; i < conteudoSeparado.length; i++){
//   var numeroMagico = Math.floor((Math.random() * 51) + 1);
//   var letraConteudo = conteudoSeparado[i];
//   var letraCodificada = alfabeto[numeroMagico];
//   var chaveLetra = alfabeto.indexOf(letraConteudo);
//
//   conteudoMisturado.push(letraCodificada);
//   chave.push(chaveLetra);
// }
//
// //Transforma as arrays em strings e retira as virgulas , deixando um espaço entre apenas os numeros

//
// //Insere o resultado no HTML
// document.getElementById("palavraCodificada").innerHTML = $conteudoTextoMisturado;
// document.getElementById("chaveCodificada").innerHTML = $chave;
