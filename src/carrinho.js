
const deleteBtn = document.querySelector(".btn-delete")
const cardProduto =document.querySelector(".card-produto")
const containerLeft =document.querySelector(".container-left")

const submitBtn =document.querySelector("#submit")
const quantidadeBtn =document.querySelector("#quantity")
const checkboxesTamanho = document.querySelectorAll("#tamanhos input[type='checkbox']");

//sessão entrega
const btnComprar = document.querySelector("#botao1");
const btnVoltar = document.querySelector("#botao2");

// Captura todos os checkboxes de entrega
const checkboxesEntrega = document.querySelectorAll(".tipo-entrega input[type='checkbox']");




//deletar item do carrinho
deleteBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  const confirmarDelete =confirm("Deseja retirar o item do carrinho de compras?")
  if (confirmarDelete) {
    containerLeft.removeChild(cardProduto)
  }
  
})

submitBtn.addEventListener("click",(e)=>{
  e.preventDefault()

  //verifica a  quantidade do produto
  if (quantidadeBtn.value==0) {
    alert("por favor , informe a quantidade desejada")
     }

     let tamanhoSelecionado = false;
// Verificar se algum checkbox de tamanho está marcado
  for (let i = 0; i < checkboxesTamanho.length; i++) {
    if (checkboxesTamanho[i].checked) {
      tamanhoSelecionado = true;
      break; // Encerra o loop ao encontrar o primeiro checkbox marcado
    }
  }
  // Se nenhum tamanho foi selecionado, exibe a mensagem de erro
  if (!tamanhoSelecionado) {
    alert("Por favor, selecione um tamanho desejado.");
    return; // Interrompe se nenhum tamanho foi selecionado
  } else if(!tamanhoSelecionado && quantidadeBtn.value==0){
  alert("Por favor , preencha todos os campos!");
  }else if(tamanhoSelecionado && quantidadeBtn.value>0){
    alert("produto enviado para a sessão de delivery!")
  }
  });

  // Garantir que apenas um checkbox de tamanho esteja selecionado por vez
checkboxesTamanho.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Desmarca todos os outros checkboxes
      checkboxesTamanho.forEach((cb) => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });
    }
  });
});

     

// sessão delivery 
  
checkboxesEntrega.forEach((entrega) => {
  entrega.addEventListener("change", () => {
    if (entrega.checked) {
      checkboxesEntrega.forEach((cb) => {
        if (cb !== entrega) {
          cb.checked = false;
        }
      });
    }
  });
});

// Evento de clique no botão "Proceed to checkout"
btnComprar.addEventListener("click", (e) => {
  e.preventDefault();

  // Verificar se alguma opção de entrega foi selecionada
  let entregaSelecionada = false;
  for (let i = 0; i < checkboxesEntrega.length; i++) {
    if (checkboxesEntrega[i].checked) {
      entregaSelecionada = true;
      break;
    }
  }

  if (!entregaSelecionada) {
    alert("Por favor, selecione um tipo de entrega.");
    return;
  }

  alert("Processando o checkout...");
});

// Evento de clique no botão "Continue Shopping"
btnVoltar.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Voltando às compras...");
  window.location.href="index.html"
});