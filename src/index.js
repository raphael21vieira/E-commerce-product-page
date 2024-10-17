// Captura os elementos
const btn = document.querySelector(".botao");
const quant = document.querySelector(".quantidade a");
const imgInferior1 = document.getElementById("img-inferior1");
const imgInferior2 = document.getElementById("img-inferior2");
const imgInferior3 = document.getElementById("img-inferior3");
const imgInferior4 = document.getElementById("img-inferior4");
const imgSuperior = document.querySelector("#img-superior");
const imgcarrinho= document.querySelector("#img-carrinho")

const valorAtual=document.querySelector(".valor-atual")
const valorAntigo= document.querySelector(".valor-antigo")
const quantidade =document.querySelector(".quantidade")
const botaoSomar= document.querySelector("#botaoSomar")
const botaoValor= document.querySelector("#botaoValor")
const botaoSub= document.querySelector("#botaoSub")




// Evento mouseover para cada imagem inferior
imgInferior1.addEventListener("mouseover", () => {
  imgSuperior.src = imgInferior1.src; // Troca a imagem superior para a da imagem inferior 1
});

imgInferior2.addEventListener("mouseover", () => {
  imgSuperior.src = imgInferior2.src; // Troca a imagem superior para a da imagem inferior 2
});

imgInferior3.addEventListener("mouseover", () => {
  imgSuperior.src = imgInferior3.src; // Troca a imagem superior para a da imagem inferior 3
});

imgInferior4.addEventListener("mouseover", () => {
  imgSuperior.src = imgInferior4.src; // Troca a imagem superior para a da imagem inferior 4
});

// botao somar e diminuir quantidade

botaoSomar.addEventListener("click",(e)=>{
  e.preventDefault();

  botaoValor.textContent++
  
})
botaoSub.addEventListener("click",(e)=>{
  e.preventDefault();
  if (botaoValor.textContent>=1) {
    botaoValor.textContent--
  }
  
})


// botao principal

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtenha o valor atual, removendo possíveis caracteres não numéricos (como símbolos de moeda)
  let vAtual = parseFloat(valorAtual.textContent.replace(/[^\d.-]/g, '')); // Remove caracteres como R$ ou $
  let vAntigo=parseFloat(valorAntigo.textContent.replace(/[^\d.-]/g, ''));
  let quantProduto = parseFloat(botaoValor.textContent.replace(/[^\d.-]/g, '')); // Faz o mesmo com a quantidade
vAntigo = vAntigo*quantProduto;


  // Verifique se os valores são válidos antes de realizar o cálculo
  if (isNaN(vAtual) || isNaN(quantProduto)) {
    console.error("Valor inválido detectado");
    return; // Interrompe se houver valores inválidos
  }

  

alert("Produto adicionado ao carrinho");
  window.location.href="carrinho.html"
  // Realiza o cálculo do valor total e envia ao carrinho
  let calculoValor = (vAtual * quantProduto);
  

  valorAtual.textContent= `$${calculoValor.toFixed(2)}`
  valorAntigo.textContent= `$${vAntigo.toFixed(2)}`
  console.log(`PRODUTO: TENIS\nQUANTIDADE: ${quantProduto}\nPREÇO SEM DESCONTO: $${(vAntigo).toFixed(2)}\nPREÇO ATUAL: $${calculoValor.toFixed(2)}`);
});


// ir para o carrinho

imgcarrinho.addEventListener("click",(e)=>{
  e.preventDefault();
  
  let confirmar = confirm("deseja ir até o carrinho de compras ?")
if (confirmar) {
  window.location.href="carrinho.html"
}

})