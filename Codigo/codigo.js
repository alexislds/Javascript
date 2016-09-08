//Cria um objeto "alfabeto"
var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"]
//Pega a palavra a ser codificada
var $conteudo = document.getElementById("areaTexto").textContent
//Separa os caracteres da palavra
var conteudoSeparado = $conteudo.split("");
//Cria as arrays onde armazenaram as letras codificadas e chave
var conteudoMisturado = [];
var chave = [];

//Cria um loop de criar letra por letra baseando nas quantidades de caracteres existentes na palavra a ser codificada
//Utitliza um numero randomico para criar a aleatoridade de qual letra vai ser escolhida do nosso objeto alfabeto
//Armazena as letras e chaves nas arrays criadas acima var chave e var conteudoMisturado
for (i = 0; i < conteudoSeparado.length; i++){
  var numeroMagico = Math.floor((Math.random() * 51) + 1);
  var letraConteudo = conteudoSeparado[i];
  var letraCodificada = alfabeto[numeroMagico];
  var chaveLetra = alfabeto.indexOf(letraConteudo);

  conteudoMisturado.push(letraCodificada);
  chave.push(chaveLetra);
}

//Transforma as arrays em strings e retira as virgulas , deixando um espaço entre apenas os numeros
var $conteudoMisturado = conteudoMisturado.join("");
var $chave = chave.join(" ");

//Insere o resultado no HTML
document.getElementById("palavraCodificada").innerHTML = $conteudoMisturado;
document.getElementById("chaveCodificada").innerHTML = $chave;
