var padrao = {
  telRes : {regra : '(##) ####-####',     tipo: 'numero'},
  telCel : {regra : '(##) #####-####',    tipo: 'numero'},
  cpf    : {regra : '###.###.###-##',     tipo: 'numero'},
  data   : {regra : '##/##/####',         tipo: 'numero'},
  cnpj   : {regra : '##.###.###/####-##', tipo: 'numero'}
};


window.addEventListener('keyup', function(evento) {
  var alvo = evento.target;
  var masc = alvo.getAttribute('data-mascara');

  if (masc) {
    mascara(alvo, masc);
  }
});


function mascara(input, atributo){
  var valor = input.value;
  var regra = padrao[atributo]['regra'];
  var tipo  = padrao[atributo]['tipo'];

  input.setAttribute('maxlength', regra.length);

  if (tipo == 'numero') {
    valor = valor.replace(/[A-Z]/gi, '');
  }
  else if (tipo == 'texto') {
    valor = valor.replace(/[0-9]/gi, '');
  }

  var valorNovo = '';

  if (valor != '') {
    for (i = 0; i < valor.length; i++) {

      if (regra[i] != '#' && valor[i] != regra[i]) {
        valorNovo = valorNovo + regra[i];
      }

      valorNovo = valorNovo + valor[i];
    }
  }

  input.value = valorNovo;
}

//BUGS e MELHORIAS E TESTES//

//1- SE COPIAR ALGO COM MAIS CARACTERES DOQUE O PERMITIDO PELO MAXLENGTH, E COLAR NO INPUT, VAI DAR ERRO.
//2- MELHORAR OBJETO "PADRAO"
//3- TESTAR DE TODAS AS FORMAS, COM O INTUITO DE BUGAR, PARA APÓS ISSO CORRIGIR.
