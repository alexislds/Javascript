var padrao = {
  telRes : {regra : '(##) ####-####'},
  telCel : {regra : '(##) #####-####'},
  cpf    : {regra : '###.###.###-%%'},
  data   : {regra : '##/##/####'},
  placa  : {regra : '$$$-####'},
  cnpj   : {regra : '##.###.###/####-##'}
};

document.addEventListener('DOMContentLoaded', function(evento){

  window.addEventListener('keyup', function(evento) {
    var alvo = evento.target;
    var masc = alvo.getAttribute('data-mascara');

    if (masc) {
      mascara(alvo, masc);
    }
  });
});



function mascara(input, atributo){
  var valor = input.value;
  var regra = padrao[atributo]['regra'];

  input.setAttribute('maxlength', regra.length);

  var valorNovo = '';

  if (valor != '') {

    for (i = 0; i < valor.length; i++) {

      if (regra[i] == '#') {
        //valor[i] = valor[i].replace(/[^0-9]/gi, '');
        valorNovo += valor[i];
      }
      else if (regra[i] == '$') {
        //valor[i] = valor[i].replace(/[^A-Z]/gi, '');
        valorNovo += valor[i];
      }
      else if (regra[i] == '%') {
        //valor[i] = valor[i].replace(/[^0-9A-Z]/gi, '');
        valorNovo += valor[i];
      }
      else if (regra[i] == valor[i]) {
        valorNovo += valor[i];        
      }
      else if (regra[i] != valor[i]) {
        valorNovo += regra[i] + valor[i];
      }
    }
    
    input.value = valorNovo;
  }
}
