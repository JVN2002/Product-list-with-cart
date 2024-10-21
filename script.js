let cardapio = []; 
let count = 0;
let total = 0;
let qtdGlobal = 0;
let qtdCarrinho = 0;

fetch('data.json')
    .then(res=> res.json())
    .then(data => {
        cardapio = data;
        cardapioList();
    })
    .catch(error => console.log('erro',error));



function abreBotao(id, qtd){
    id.classList.add('abrirQuantidade');
    qtdGlobal = qtd;
}


function fechaBotao(id){
    id.classList.remove('abrirQuantidade');
}


function verificaMenos(id,qdtID){
    qtdGlobal --;
    qdtID.textContent = qtdGlobal;
    if(qtdGlobal <= 0)
    {
        fechaBotao(id);
    }
}

function verificaMais(id){
    qtdGlobal ++;
    id.textContent = qtdGlobal;
}

const DessertList = document.getElementById('container');
const cardapioListUL = document.getElementById('ulList');
const carrinhoHTML = document.getElementById('cartID');
const compraDoCarrinho = document.getElementById('compraFinal');
const tituloCarrinho = document.getElementById('qtdCarrinho');


function formataPreco(){
    let real =  new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    return real;
}

function cardapioList(){
    console.log(cardapio);
    for(let j = 0;j<cardapio.length;j++)
    {
        const card = document.createElement("li");
        card.innerHTML = `<li class="card">
            <div class="img-btn">
              <img src="${cardapio[j].image.desktop}" alt="Waffle" class="photo">
              <button class="btn-addToCart" id="btnAddToCart" onclick="abreBotao(btnId${j},qtd${j}.innerText), attCardapio(name${j}.innerText,preco${j}.innerText,qtd${j}.innerText)">
                <img src="assets/images/icon-add-to-cart.svg" alt="carrinho">
                <b>Add to Cart</b>
              </button>
              <button class="img-btn-add" id="btnId${j}">
                <img src="assets/images/icon-decrement-quantity.svg" class="menos" id="menos" alt="menos" onclick="verificaMenos(btnId${j},qtd${j})">
                <b class="quantidade" id="qtd${j}">1</b>
                <img src="assets/images/icon-increment-quantity.svg" class="mais" id="mais" alt="mais" onclick="verificaMais(qtd${j})">
              </button>
            </div>
            <div class="descricao">
              <h5>${cardapio[j].category}</h5>
              <h4 id="name${j}">${cardapio[j].name}</h4>
              <p class="price" id="preco${j}"><b>${formataPreco().format(cardapio[j].price)}</b></p>
            </div>
          </li>`;
          cardapioListUL.appendChild(card);
    }
}

window.onload = function vazio(){   
    DessertList.innerHTML = `<div class="carrinhoVazio">
        <img src="assets/images/illustration-empty-cart.svg" alt="vaziu">
        <p><b>Your added items will appear here</b></p>
      </div>`;
}



function attCardapio(name, preco){        
        if(count === 0){
            DessertList.innerHTML = ``;
        }        
        let elemento = document.createElement("ul");
        elemento.className = "cart-items";
        let precoReal = preco.replace("R$","").trim().replace(",",".");
        let precoRealFloat = parseFloat(precoReal);
        let precoTotal =  precoRealFloat * qtdGlobal;
        let qtdAtual = 0;
        qtdAtual += parseInt(qtdGlobal);

        if(name !== ""){
            
            elemento.innerHTML = `<li>
            <b>${name}</b><br>
            <div class="alinhamento">
                <span><b>${qtdAtual}x</b></span><p class="preco"><span>@${preco} </span>R$ ${precoTotal.toFixed(2)}</p>
                <button onclick="removerItem(this)"><img src="assets/images/icon-remove-item.svg" alt="X"></button>
            </div>
            </li>`;
            DessertList.appendChild(elemento);
            name.value = "";      
        }        
        total += precoTotal; 
        compraDoCarrinho.innerHTML = `<div class="alinhamento">
            <p>Order total:</p>
            <p class="total">R$ ${total.toFixed(2)}</p>
          </div>
          <div class="aviso">
          <img src="assets/images/icon-carbon-neutral.svg" alt="">
          <p>This is a <b>carbon-neutral</b> delivery</p>
          </div>
          <button class="confirm-order" id="confirm-order" onclick="fechaBotao(btnId3)">Confirm Order</button>`;
        count ++;
        qtdCarrinho += parseInt(qtdGlobal);

        tituloCarrinho.textContent = qtdCarrinho;
}

function precoFinal(){
    total += precoTotal; 
    carrinhoHTML.innerHTML = `<div class="alinhamento">
        <p>Order total:</p>
        <p class="total">R$ ${total}</p>
      </div>
      <button class="confirm-order" id="confirm-order" onclick="fechaBotao(btnId0)">Confirm Order</button>`;
}

function removerItem(button){
    let elemento = button.parentElement;
    DessertList.remove(elemento);
}

