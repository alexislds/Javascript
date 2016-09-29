var $btnCodificar = document.querySelector("#btn-escolha-codificar");
var $btnDescodificar = document.querySelector("#btn-escolha-descodificar");
var $btnsEntrada = document.querySelector("#btns-entrada");
var $frmTexto = document.querySelector("#frm-texto");
var $resultado = document.querySelector("#resultado");

function efeitoPrimeiro (botao, alvo, alvo2){
  botao.addEventListener ("click", function(){
    event.preventDefault();
    alvo.classList.add("primeira-transicao");
    alvo2.classList.remove("hide");
  });
}

efeitoPrimeiro($btnCodificar, $btnsEntrada, $frmTexto);



var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z","ç","ã","õ","é","í","ó","á","ú","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z","Ç","Ã","Õ","É","Í","Ó","Á","Ú","1","2","3","4","5","6","7","8","9","0"];
var caracteresEspeciais = ["?","/",";",":","!","@",".",",","_","+","-"," "];
var identificacao = caracteresEspeciais.concat(alfabeto);
var $conteudoTexto = document.querySelector("#area-texto");
var $conteudoCodigo = document.querySelector("#area-codigo");
var $btnTexto = document.querySelector("#btn-texto");
var $btnCodigo = document.querySelector("#btn-codigo");
var $palavra = document.querySelector("#palavra-texto");
var $palavraCodificada = document.querySelector("#palavra-codificada");
var $chave = document.querySelector("#chave-texto");

function clickBtnTexto (botao, conteudo) {
  botao.addEventListener ("click", function(){
    event.preventDefault();
    var texto = conteudo.value;
    var letras = texto.split("");
    var textoArray = [];
    var chaveArray = [];

    for (i = 0; i < letras.length; i++) {
      var numeroMagico = Math.floor((Math.random() * alfabeto.length) + 1);
      var letraTexto = letras[i];
      var letraCodificada = alfabeto[numeroMagico];
      var chaveLetra = identificacao.indexOf(letraTexto);

      textoArray.push(letraCodificada);
      chaveArray.push(chaveLetra);
    }

    var textoCodificado = textoArray.join("");
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
    var numerosCodigo = codigo.split(" ");
    var textoArray = [];

    for (i = 0; i < numerosCodigo.length; i++) {
      var numero = numerosCodigo[i];
      var letraOriginal = identificacao[numero];
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
