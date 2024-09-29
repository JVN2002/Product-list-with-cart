let cardapio = []; 
var contador = 0;




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
    contador++;
    
}


function fechaBotao(id){
    id.classList.remove('abrirQuantidade');
    count = 0;
}


function verificaMenos(id,qdtID){
    qtdGlobal --;
    qdtID.textContent = qtdGlobal;
    if(qtdGlobal <= 0)
    {
        fechaBotao(id);
        count = 0;
    }
}

function verificaMais(id){
    parseInt(qtdGlobal);
    qtdGlobal ++;
    id.textContent = qtdGlobal;
}


const DessertList = document.getElementById('dessertsList');
const cardapioListUL = document.getElementById('ulList');
const carrinhoHTML = document.getElementById('cartID');


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
              <button class="btn-addToCart" id="btnAddToCart" onclick="abreBotao(btnId${j},qtd${j}.innerText), addToCardapio(name${j}.innerText,preco${j}.innerText,qtd${j}.innerText)">
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



function addToCardapio(name,preco){
    const li = document.createElement("li");
    let precoTotal= preco * qtdGlobal;
    if(name !== ""){
        
        li.innerHTML = `<li>
          <b>${name}</b><br>
          <div class="alinhamento">
            <span><b>${qtdGlobal}x</b></span><p class="preco"><span>@$${preco} </span>$${precoTotal}</p>
            <button onclick="removerItem(this)"><img src="assets/images/icon-remove-item.svg" alt="X"></button>
          </div>
        </li>`;
        DessertList.appendChild(li);
        name.value = "";
        attcardapio();       
    }
    
}

console.log("chamou"+contador);

var container = document.querySelector("#container");

if(contador === 0){
    container.innerHTML = `<div class="carrinhoVazio">
        <img src="assets/images/illustration-empty-cart.svg" alt="vaziu">
        <p><b>Your added items will appear here</b></p>
      </div>`;
}



function criandoCarrinho(){
    

    /*if(addToCardapio === false){
        const img = document.createElement("div");
        img.innerHTML = `<div class="carrinhoVazio">
        <img src="assets/images/illustration-empty-cart.svg" alt="vaziu">
        <p><b>Your added items will appear here</b></p>
      </div>`;
      carrinhoHTML.appendChild(img);
    }else if(addToCardapio)
    {
        const total = document.createElement("div");
        total.innerHTML = `<ul class="cart-items" id="dessertsList">       
      </ul>     
      <div class="alinhamento">
        <p>Order total:</p>
        <p class="total">$46.50</p>
      </div>
      <button class="confirm-order" id="confirm-order" onclick="fechaBotao(btnId0)">Confirm Order</button>`;
      carrinhoHTML.appendChild(total);
    }
    if(addToCardapio)
    {
        parseInt(qtdCarrinho);
        qtdCarrinho ++;
        idQTD.textContent = qtdCarrinho;
    }else{
        const img = document.createElement("img");
        img.innerHTML = ``
    }*/

}


function attcardapio(){
    if(verificaMais)
    {
        parseInt(addToCardapio.count);
        addToCardapio.count ++;
    }
    else if(verificaMenos)
    {
        addToCardapio.count --;
    }
}

function removerItem(button){
    const li = button.parentElement;
    DessertList.removeAttribute(li);
}

