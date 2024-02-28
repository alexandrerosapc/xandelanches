let tPrato, tBebida, tSobremesa
let pPrato, pBebida, pSobremesa

function selecionarPrato(escolha1, seletorPrato){
   const busca1 = document.querySelector('.pratos .selecionado');

   if (busca1 !== null){
    busca1.classList.remove('selecionado');
   }
   escolha1.classList.add('selecionado');

   const elementoTitulo = document.querySelector(seletorPrato+' h1');
   const elementoPreco = document.querySelector(seletorPrato+ ' p')

   tPrato = elementoTitulo.innerHTML
   pPrato = elementoPreco.innerHTML

   ativarBotaoFinalizarPedido()
}

function selecionarBebida(escolha2, seletorBebida){
    const busca2 = document.querySelector('.bebidas .selecionado');
 
    if (busca2 !== null){
     busca2.classList.remove('selecionado');
    }
    escolha2.classList.add('selecionado');

    const elementoTitulo = document.querySelector(seletorBebida+' h1');
    const elementoPreco = document.querySelector(seletorBebida+ ' p')

    tBebida = elementoTitulo.innerHTML
    pBebida = elementoPreco.innerHTML

    ativarBotaoFinalizarPedido()
 }
 
 function selecionarSobremesa(escolha3, seletorSobremesa){
    const busca3 = document.querySelector('.sobremesas .selecionado');
 
    if (busca3 !== null){
     busca3.classList.remove('selecionado');
    }
    escolha3.classList.add('selecionado');

    const elementoTitulo = document.querySelector(seletorSobremesa+' h1');
    const elementoPreco = document.querySelector(seletorSobremesa+ ' p')

    tSobremesa = elementoTitulo.innerHTML
    pSobremesa = elementoPreco.innerHTML

    ativarBotaoFinalizarPedido()
 }

 function ativarBotaoFinalizarPedido(){
     if( tPrato !== undefined){
        if ( tBebida !== undefined){
            if ( tSobremesa !== undefined){                
                const botao = document.querySelector('button');
                botao.classList.add('confirmar-pedido');
                botao.innerHTML = 'Fechar Pedido';
            }
        }
    }

}


function finalizarPedido(){
    pPrato = pPrato.replace('R$ ','');
    pBebida = pBebida.replace('R$ ','');
    pSobremesa = pSobremesa.replace('R$ ','');

    pPrato = pPrato.replace(',','.');
    pBebida = pBebida.replace(',','.');
    pSobremesa = pSobremesa.replace(',','.');

    soma = Number(pPrato) + Number(pBebida) + Number(pSobremesa);

    
    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${tPrato} 
    - Bebida: ${tBebida}
    - Sobremesa: ${tSobremesa}
    Total: R$${soma.toFixed(2)}`;

    const msgWP = encodeURIComponent(msg)
    
    if ( tPrato !== undefined){
        if ( tBebida !== undefined){
            if ( tSobremesa !== undefined){
                window.open(` https://wa.me//55999999999?text=${msgWP}`)
            }
        }
    }
}