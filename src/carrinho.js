// Captura dos elementos principais
const deleteBtn = document.querySelector(".btn-delete");
const cardProduto = document.querySelector(".card-produto");
const containerLeft = document.querySelector(".container-left");

const submitBtn = document.querySelector("#submit");
const quantidadeBtn = document.querySelector("#quantity");
const checkboxesTamanho = document.querySelectorAll("#tamanhos input[type='checkbox']");

// Sessão de entrega
const btnComprar = document.querySelector("#botao1");
const btnVoltar = document.querySelector("#botao2");
const checkboxesEntrega = document.querySelectorAll(".tipo-entrega input[type='checkbox']");

// Função auxiliar: Desmarcar outros checkboxes
const desmarcarOutrosCheckboxes = (checkboxes, checkboxSelecionado) => {
  checkboxes.forEach((checkbox) => {
    if (checkbox !== checkboxSelecionado) {
      checkbox.checked = false;
    }
  });
};

// Função auxiliar: Verificar se algum checkbox está marcado
const verificarCheckboxMarcado = (checkboxes) => {
  return Array.from(checkboxes).some((checkbox) => checkbox.checked);
};

// Função auxiliar: Exibir alerta e interromper o fluxo
const mostrarAlerta = (mensagem) => {
  alert(mensagem);
};

// Função para deletar o item do carrinho
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const confirmarDelete = confirm("Deseja retirar o item do carrinho de compras?");
  if (confirmarDelete) {
    containerLeft.removeChild(cardProduto);
  }
});

// Verificação e envio do formulário de compra
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Verifica se a quantidade foi informada
  if (quantidadeBtn.value == 0) {
    mostrarAlerta("Por favor, informe a quantidade desejada.");
    return;
  }

  // Verifica se algum tamanho foi selecionado
  const tamanhoSelecionado = verificarCheckboxMarcado(checkboxesTamanho);
  if (!tamanhoSelecionado) {
    mostrarAlerta("Por favor, selecione um tamanho desejado.");
    return;
  }

  // Se tudo estiver ok
  mostrarAlerta("Produto enviado para a sessão de delivery!");
});

// Garantir que apenas um checkbox de tamanho esteja selecionado por vez
checkboxesTamanho.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      desmarcarOutrosCheckboxes(checkboxesTamanho, checkbox);
    }
  });
});

// Sessão de entrega: Garantir que apenas um checkbox de entrega esteja selecionado por vez
checkboxesEntrega.forEach((entrega) => {
  entrega.addEventListener("change", () => {
    if (entrega.checked) {
      desmarcarOutrosCheckboxes(checkboxesEntrega, entrega);
    }
  });
});

// Evento de clique no botão "Proceed to checkout"
btnComprar.addEventListener("click", (e) => {
  e.preventDefault();

  // Verifica se algum tipo de entrega foi selecionado
  const entregaSelecionada = verificarCheckboxMarcado(checkboxesEntrega);
  if (!entregaSelecionada) {
    mostrarAlerta("Por favor, selecione um tipo de entrega.");
    return;
  }

  mostrarAlerta("Processando o checkout...");
});

// Evento de clique no botão "Continue Shopping"
btnVoltar.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarAlerta("Voltando às compras...");
  window.location.href = "index.html"; // Redireciona para a página principal
});
