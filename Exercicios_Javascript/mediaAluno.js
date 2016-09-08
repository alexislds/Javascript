//Calcule a media do aluno AV1+Av2+Av3+Av4/4
//Se media for maior ou igual que 6 dizer que passou
//Se media for menor que 6 dizer que reprovou

var getAv1 = prompt('Insira sua nota da Av1');
var av1 = parseInt(getAv1);

var getAv2 = prompt('Insira sua nota da Av2');
var av2 = parseInt(getAv2);

var getAv3 = prompt('Insira sua nota da Av3');
var av3 = parseInt(getAv3);

var getAv4 = prompt('Insira sua nota da Av4');
var av4 = parseInt(getAv4);

var media = (av1+av2+av3+av4)/4;

if (media >= 6){
    console.log('Sua media é: '+ media +', Parabens voce passou!');
} else {
    console.log(media);
    console.log('Sua media é: '+ media +',Infelizmente voce reprovou');
};
