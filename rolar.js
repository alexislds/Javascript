var $getBody = document.querySelector('body');
var $getBotoes = $getBody.querySelectorAll('.btn-efeito');

$getBotoes[0].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.servicos', 5);
});
$getBotoes[1].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.home', 5);
});
$getBotoes[2].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.quemsomos', 5);
});
$getBotoes[3].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.servicos', 5);
});
$getBotoes[4].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.trabalheconosco', 5);
});
$getBotoes[5].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.quemsomos', 5);
});
$getBotoes[6].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.contato', 5);
});
$getBotoes[7].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.trabalheconosco', 5);
});

function rolar(el, duracao) {
  var $getEl = document.querySelector(el);
  var $getTamanhoBody = document.body.offsetHeight*4;
  var posicaoEl = $getEl.offsetTop;
  var posicaoAtual = window.pageYOffset;
  var velocidade = 15;
  var distancia;
  var andar;

  var rolar = setInterval(function(){
    var distancia = posicaoEl - posicaoAtual;
    var velocidade = 15;
    var andarDown = posicaoAtual + velocidade;
    var andarUp = posicaoAtual - velocidade;

    if (posicaoAtual > $getTamanhoBody) {
      clearInterval(rolar);
    }
    else if (posicaoAtual < posicaoEl) {
      if (distancia >= 20) {
        scrollTo(0, andarDown);
        posicaoAtual = window.pageYOffset;
      }
      else {
        velocidade = 1;
        andarDown = posicaoAtual + velocidade;
        scrollTo(0, andarDown);
        posicaoAtual = window.pageYOffset;
      }
    }
    else if (posicaoAtual > posicaoEl) {
      if (distancia <= 20) {
        scrollTo(0, andarUp);
        posicaoAtual = window.pageYOffset;
      }
      else {
        velocidade = 1;
        andarUp = posicaoAtual - velocidade;
        scrollTo(0, andarUp);
        posicaoAtual = window.pageYOffset;
      }
    }
    else if (posicaoAtual == posicaoEl) {
      clearInterval(rolar);
    }
  }, duracao);
}
