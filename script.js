

let btnConfirm = document.getElementById('confirm-order');

let cardapio = []; 

fetch('data.json')
    .then(res=> res.json())
    .then(data => {
        cardapio = data;
        cardapioList();
    })
    .catch(error => console.log('erro',error));



function abreBotao(id, qtd){
    let btnAdd = document.getElementById(id);
    if(btnAdd)
    {
        btnAdd.classList.add('abrirQuantidade');
    }   
    qtdGlobal = qtd;
}

function fechaBotao(){
    btnAdd.classList.remove('abrirQuantidade');
    count = 0;
}

btnConfirm.addEventListener('click', fechaBotao)


function verificaMenos(id){
    qtdGlobal --;
    id.textContent = qtdGlobal;
    if(qtdGlobal === 0)
    {
        fechaBotao();
    }
}

function verificaMais(id){
    parseInt(qtdGlobal);
    qtdGlobal ++;
    id.textContent = qtdGlobal;
}



const DessertList = document.getElementById('dessertsList');
const cardapioListUL = document.getElementById('ulList');

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
              <button class="btn-addToCart" id="btnAddToCart" onclick="abreBotao(btnId,qtd${j}.innerText), addToCardapio(name${j}.innerText,preco${j}.innerText,qtd${j}.innerText)">
                <img src="assets/images/icon-add-to-cart.svg" alt="carrinho">
                <b>Add to Cart</b>
              </button>
              <button class="img-btn-add" id="btnId">
                <img src="assets/images/icon-decrement-quantity.svg" class="menos" id="menos" alt="menos" onclick="verificaMenos(qtd${j})">
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
    
    const precoTotal= preco * qtdGlobal;
    if(name !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<li>
          <b>${name}</b><br>
          <div class="alinhamento">
            <span><b>${qtdGlobal}x</b></span><p class="preco"><span>@$${preco} </span>$${precoTotal}</p>
            <button onclick="removerItem(this)"><img src="assets/images/icon-remove-item.svg" alt="X"></button>
          </div>
        </li>`;
        DessertList.appendChild(li);
        name.value = "";
        console.log(qtdGlobal);
        attcardapio();
    }
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

