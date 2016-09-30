var $lista = document.querySelector("#carrosel");

var $itens = $lista.children;
console.log($itens);

/*
var $itens = document.querySelectorAll(".carrosel-item");
console.log($itens);
*/

var $btnAnterior = document.querySelector("#btn1");
var $btnProximo  = document.querySelector("#btn2");

var ultimo = $itens.length - 1;

$btnProximo.addEventListener("click", function(){
  var mover = $itens[0];
  
  console.log('test2', mover);

  mover.classList.add("mover");
  
  setTimeout(function(){
    $lista.appendChild(mover);
    mover.classList.remove("mover");
  }, 500);
});

// $btnAnterior.addEventListener("click", function(){
//   $lista.insertBefore($lista.children[0], $lista.children[tamanhoLista]);
// });

// $btnProximo.addEventListener("click", function(){
//   $lista.insertBefore($lista.children[tamanhoLista-1], $lista.children[0]);
// });
// $btnAnterior.addEventListener("click", function(){
//   $lista.insertBefore($lista.children[0], $lista.children[tamanhoLista]);
// })7