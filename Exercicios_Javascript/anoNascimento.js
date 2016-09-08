//Pegue a idade
//Pegue ano atual
//Calcule ano - idade
//Mostre ano de nascimento
//Se idade < 10 por criança, > 10 e < 18 adolescente , > 18 e < 40 adulto , > 40 velho

var getIdade = prompt('Quantos anos voce vai fazer esse ano?');
var idade = parseInt(getIdade);
var getAno = prompt('Em que ano estamos?');
var ano = parseInt(getAno);
var anoNasc = ano - idade;

if (anoNasc){
    console.log('Voce nasceu em: ' + anoNasc + '.');
} if (idade >= 1 && idade < 10){
    console.log('Voce é considerado uma criança');
  }
  if (idade >= 10 && idade < 18){
      console.log('Voce é considerado um adolescente');
  }
  if (idade >= 18 && idade < 40){
      console.log('Voce é considerado um adulto');
  }
  if (idade >= 40){
      console.log('Voce é considerado um velho');
  }
