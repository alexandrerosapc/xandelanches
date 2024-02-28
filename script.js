let tPrato, tBebida, tSobremesa;
let pPrato, pBebida, pSobremesa;

let msg;

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
                const botao = document.querySelector('.container-bot button');
                botao.classList.add('confirmacao');
                botao.innerHTML = 'Fechar Pedido';
            }
        }
    }

}



function finalizarPedido(){
    
    
    if ( tPrato !== undefined){
        if ( tBebida !== undefined){
            if ( tSobremesa !== undefined){
                pPrato = pPrato.replace('R$ ','');
                pBebida = pBebida.replace('R$ ','');
                pSobremesa = pSobremesa.replace('R$ ','');

                pPrato = pPrato.replace(',','.');
                pBebida = pBebida.replace(',','.');
                pSobremesa = pSobremesa.replace(',','.');

                const soma = Number(pPrato) + Number(pBebida) + Number(pSobremesa);


                let msg = `Olá, gostaria de fazer o pedido:
                - Prato: ${tPrato} 
                - Bebida: ${tBebida}
                - Sobremesa: ${tSobremesa}
                Total: R$${soma.toFixed(2)}`;

                const msgWP = encodeURIComponent(msg)
                const telaFechamento = document.querySelector('.overlay');
                telaFechamento.classList.remove('escondido');

                // preencher os elemento da tela de fechamento
                const nomePrato = document.querySelector('.comida .nome');
                nomePrato.innerHTML = tPrato;
                const precoPrato = document.querySelector('.comida .preco');
                precoPrato.innerHTML = pPrato;

                const nomeBebida = document.querySelector('.bebida .nome');
                nomeBebida.innerHTML = tBebida;
                const precoBebida = document.querySelector('.bebida .preco');
                precoBebida.innerHTML = pBebida;

                const nomeSobremesa = document.querySelector('.sobremesa .nome');
                nomeSobremesa.innerHTML = tSobremesa;
                const precoSobremesa = document.querySelector('.sobremesa .preco');
                precoSobremesa.innerHTML = pSobremesa;

                const elementoTotal = document.querySelector('.total .preco-total');
                elementoTotal.innerHTML = `R$ ${soma.toFixed(2)}`;
            }
        }
    }
}



function cancelar(){
    const telaFechamento = document.querySelector('.overlay');
    telaFechamento.classList.add('escondido');
    
}

function enviarWP(){  
    pPrato = pPrato.replace('R$ ','');
    pBebida = pBebida.replace('R$ ','');
    pSobremesa = pSobremesa.replace('R$ ','');

    pPrato = pPrato.replace(',','.');
    pBebida = pBebida.replace(',','.');
    pSobremesa = pSobremesa.replace(',','.');

    const soma = Number(pPrato) + Number(pBebida) + Number(pSobremesa);


    msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${tPrato} 
    - Bebida: ${tBebida}
    - Sobremesa: ${tSobremesa}
    Total: R$${soma.toFixed(2)}`;
    

    const nome = prompt('Seu nome');
    const endereco = prompt('Seu endereco');

    msg = msg  + `
    Nome: ${nome} 
    Endereco: ${endereco}`;


    // preparar a mensage com encodeURIComponent
    const msgWP = encodeURIComponent(msg);

    // abrir o whatsapp web e encaminhar a mensagem
    window.open(`http://wa.me/99999999999?text=${msgWP}`);
}