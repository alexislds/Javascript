var padrao = {
  telRes : '(##) ####-####',
  telCel : '(##) #####-####',
  cpf : '###.###.###-##',
  data : '##/##/####',
  cnpj : '##.###.###/####-##',
};

window.addEventListener('keyup', function(evento) {
  var alvo = evento.target;
  if (alvo.tagName == 'INPUT' && alvo.hasAttribute('data-mascara')) {
    var alvoAtt = eval(alvo.getAttribute('data-mascara'));

    mascara(alvo, alvoAtt, 'numero');
  }
});



function mascara(input, padrao, tipo){
  var valor = input.value;

  input.setAttribute('maxlength', padrao.length);

  if (tipo == 'numero') {
    input.value = valor.replace(/[A-Z]/gi, '');
  }
  else if (tipo == 'texto') {
    input.value = valor.replace(/[0-9]/gi, '');
  }

  if (input.value != '') {
    for (i = 0; i < valor.length; i++) {
      valor = input.value;

      if (padrao[i] != '#' && valor[i] != padrao[i]) {
        var novaString = padrao[i] + valor[i];
        var tudoAntes = valor.slice(0, i);
        var tudoDepois = valor.slice(i+1, padrao.length);
        var novoValor = tudoAntes.concat(novaString).concat(tudoDepois);
        input.value = novoValor;
      }
    };
  }
};




//BUGS e MELHORIAS E TESTES//

//1- SE COPIAR ALGO COM MAIS CARACTERES DOQUE O PERMITIDO PELO MAXLENGTH, E COLAR NO INPUT, VAI DAR ERRO.
//2- MELHORAR OBJETO "PADRAO"
//3- TESTAR DE TODAS AS FORMAS, COM O INTUITO DE BUGAR, PARA APÓS ISSO CORRIGIR.
