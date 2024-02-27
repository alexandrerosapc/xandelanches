let tPrato, tBebida, tSobremesa

function selecionarPrato(escolha1){
   const busca1 = document.querySelector('.pratos .selecionado');

   if (busca1 !== null){
    busca1.classList.remove('selecionado');
   }
   escolha1.classList.add('selecionado');

   const elementoTitulo = document.querySelector

   tPrato = escolha1

   
}

function selecionarBebida(escolha2){
    const busca2 = document.querySelector('.bebidas .selecionado');
 
    if (busca2 !== null){
     busca2.classList.remove('selecionado');
    }
    escolha2.classList.add('selecionado');
    tBebida = escolha2

 }
 
 function selecionarSobremesa(escolha3){
    const busca3 = document.querySelector('.sobremesas .selecionado');
 
    if (busca3 !== null){
     busca3.classList.remove('selecionado');
    }
    escolha3.classList.add('selecionado');
    tSobremesa = escolha3

    ativarBotaoFinalizarPedido()
 }

 function ativarBotaoFinalizarPedido(){
    if (tPrato!== null){
        if (tBebida!== null){
            if (tSobremesa !== null){
                const busca4 = document.querySelector('.container-bot button');
                busca4.innerHTML = "Finalizar Pedido";

                busca4.classList.add('confirmar-pedido');
            }
        }
    }    
 }


function finalizarPedido(){

}