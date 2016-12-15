var regra = {
  telefone : '(##)#####-####',
  cpf : '###.###.###-##',
  data : '##/##/####',
  cnpj : '##.###.###/####-##',
};


window.addEventListener('keyup', function(evento){
  var elemento = evento.target;

  if (evento.keyCode == 8){
    return true;
  }

  if (elemento) {
    var regra = elemento.getAttribute('data-mascara');

    if (regra) {
      mascara(elemento, regra, 'numero');
    }
  }
});



function mascara(campo, regra, tipo){
  campo.setAttribute('maxlength', regra.length);

  var valor = campo.value;
  var ultimoIndice = valor.length - 1;

  if (tipo == 'numero') {
    campo.value = valor.replace(/[A-Z]/gi, '');
  }
  else if (tipo == 'texto') {
    campo.value = valor.replace(/[0-9]/gi, '');
  }

/*
  if (regra[ultimoIndice] != '#') {
    var novaString = regra[ultimoIndice] + valor[ultimoIndice];
    var teste1 = valor.slice(0, -1);
    var teste2 = teste1.concat(novaString);
    campo.value = teste2;
  }  // FAZ TUDO POREM BUGA QUANDO TEM DOIS SIMBOLOS SEGUIDOS NO regra EXEMPLO: ####--#### ou (##))####-####.
*/
};