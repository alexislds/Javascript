//Calcule a media do aluno AV1+Av2+Av3+Av4/4
//Se media for maior ou igual que 6 dizer que passou
//Se media for menor que 6 dizer que reprovou

var av1 = 7;
var av2 = 5;
var av3 = 7;
var av4 = 7;
var media = (av1+av2+av3+av4)/4;

if (media > 6 || media == 6){
    console.log(media);
    console.log('Parabens voce passou');
} else {
    console.log(media);
    console.log('Infelizmente voce reprovou');
};
