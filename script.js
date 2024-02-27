function selecionar(escolha){
   const busca = document.querySelector('.selecionado');
   if (busca !== null){
    busca.classList.remove('selecionado')
   }
   escolha.classList.toggle(".selecionado");
}