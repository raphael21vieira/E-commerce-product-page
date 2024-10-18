// Captura dos elementos
const btn = document.querySelector(".botao");
const quant = document.querySelector(".quantidade a");
const imgInferior1 = document.getElementById("img-inferior1");
const imgInferior2 = document.getElementById("img-inferior2");
const imgInferior3 = document.getElementById("img-inferior3");
const imgInferior4 = document.getElementById("img-inferior4");
const imgSuperior = document.querySelector("#img-superior");
const imgCarrinho = document.querySelector("#img-carrinho");

const valorAtual = document.querySelector(".valor-atual");
const valorAntigo = document.querySelector(".valor-antigo");
const botaoValor = document.querySelector("#botaoValor");
const botaoSomar = document.querySelector("#botaoSomar");
const botaoSub = document.querySelector("#botaoSub");

// Função para trocar a imagem superior
const trocarImagemSuperior = (img) => {
  imgSuperior.src = img.src;
};

// Evento mouseover para cada imagem inferior
imgInferior1.addEventListener("mouseover", () => trocarImagemSuperior(imgInferior1));
imgInferior2.addEventListener("mouseover", () => trocarImagemSuperior(imgInferior2));
imgInferior3.addEventListener("mouseover", () => trocarImagemSuperior(imgInferior3));
imgInferior4.addEventListener("mouseover", () => trocarImagemSuperior(imgInferior4));

// Botões para somar e subtrair quantidade
botaoSomar.addEventListener("click", (e) => {
  e.preventDefault();
  botaoValor.textContent++;
});

botaoSub.addEventListener("click", (e) => {
  e.preventDefault();
  if (botaoValor.textContent > 0) {
    botaoValor.textContent--;
  }
});

// Botão principal - Adicionar ao carrinho
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Remove caracteres não numéricos dos valores
  let vAtual = parseFloat(valorAtual.textContent.replace(/[^\d.-]/g, ''));
  let vAntigo = parseFloat(valorAntigo.textContent.replace(/[^\d.-]/g, ''));
  let quantProduto = parseFloat(botaoValor.textContent);

  // Calcula o valor antigo multiplicado pela quantidade
  vAntigo = vAntigo * quantProduto;

  // Verifica se os valores são válidos antes de realizar o cálculo
  if (isNaN(vAtual) || isNaN(quantProduto) || quantProduto === 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // Calcula o valor total
  let calculoValor = vAtual * quantProduto;

  // Atualiza os valores no carrinho
  valorAtual.textContent = `$${calculoValor.toFixed(2)}`;
  valorAntigo.textContent = `$${vAntigo.toFixed(2)}`;

  // Mensagem de sucesso e redirecionamento
  alert("Produto adicionado ao carrinho");
  console.log(`PRODUTO: TENIS\nQUANTIDADE: ${quantProduto}\nPREÇO SEM DESCONTO: $${vAntigo.toFixed(2)}\nPREÇO ATUAL: $${calculoValor.toFixed(2)}`);

  // Redireciona para a página do carrinho
  window.location.href = "carrinho.html";
});

// Clique no ícone do carrinho
imgCarrinho.addEventListener("click", (e) => {
  e.preventDefault();
  let confirmar = confirm("Deseja ir até o carrinho de compras?");
  if (confirmar) {
    window.location.href = "carrinho.html";
  }
});
