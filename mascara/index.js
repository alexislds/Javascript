var pattern = {
  telefone : '(##)#####-####',
  cpf : '###.###.###-##',
  data : '##/##/####',
  cnpj : '##.###.###/####-##',
};

var $input = document.querySelector('#input');

$input.addEventListener('keyup', function(event){
  if(event.keyCode != 8){
    mascara(pattern.data, 'numero');
  }
});



function mascara(pattern, tipo){
  $input.setAttribute('maxlength', pattern.length);

  var valor = $input.value;
  var ultimoIndice = valor.length - 1;

  if (tipo == 'numero') {
    $input.value = valor.replace(/[^0-9]/gi, ''); // POREM TAMBEM RETIRA AS COISAS DO PATTERN.
  }
  else if (tipo == 'texto') {
    $input.value = valor.replace(/[^A-Z]/g1, ''); // POREM TAMBEM RETIRA AS COISAS DO PATTERN.
  }

  if (pattern[ultimoIndice] != '#') {
    var novaString = pattern[ultimoIndice] + valor[ultimoIndice];
    var teste1 = valor.slice(0, ultimoIndice);
    var teste2 = teste1.concat(novaString);
    $input.value = teste2;
  }  // FAZ TUDO POREM BUGA QUANDO TEM DOIS SIMBOLOS SEGUIDOS NO PATTERN EXEMPLO: ####--#### ou (##))####-####.
};
