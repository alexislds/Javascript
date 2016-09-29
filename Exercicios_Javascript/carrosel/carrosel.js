$carroselLista   = document.querySelector("#carrosel");
$getCarroselItem = document.querySelectorAll(".carrosel-item");
$btnProximo      = document.querySelector("#btn1");
$btnAnterior     = document.querySelector("#btn2");

tamanhoLista = $carroselLista.children.length;
ultimoItem = tamanhoLista-1

var atual = 0;

$btnProximo.addEventListener("click", function(){
  $getCarroselItem[atual].classList.add("mover");
  console.log($getCarroselItem);
  setTimeout(function(){
    $carroselLista.insertBefore($getCarroselItem[atual], $getCarroselItem[tamanhoLista]);
    $getCarroselItem[atual].classList.remove("mover");
    if (atual <= tamanhoLista){
      atual++;
    }
    else {
      atual = 0;
    }
    console.log($getCarroselItem);
  },500);
});
// $btnAnterior.addEventListener("click", function(){
//   $carroselLista.insertBefore($carroselLista.children[0], $carroselLista.children[tamanhoLista]);
// });

// $btnProximo.addEventListener("click", function(){
//   $carroselLista.insertBefore($carroselLista.children[tamanhoLista-1], $carroselLista.children[0]);
// });
// $btnAnterior.addEventListener("click", function(){
//   $carroselLista.insertBefore($carroselLista.children[0], $carroselLista.children[tamanhoLista]);
// });
