let btnAddToCart = document.getElementById('btnAddToCart');
let btnAdd = document.getElementById('imgBntAdd');
let btnConfirm = document.getElementById('confirm-order');

const menos = document.querySelector('.menos');
const mais = document.querySelector('.mais');

let quantidade = document.querySelector('.quantidade');
let count = 0;


function abreBotao(){
    btnAdd.classList.add('abrirQuantidade');
    quantidade.textContent = count;
}

function fechaBotao(){
    btnAdd.classList.remove('abrirQuantidade');
    count = 0;
}

btnAddToCart.addEventListener('click', abreBotao)

btnConfirm.addEventListener('click', fechaBotao)


function verificaMenos(){
    count --;
    quantidade.textContent = count;
}

function verificaMais(){
    count ++;
    quantidade.textContent = count;
}

const DessertList = document.getElementById('dessertsList');
const name = document.getElementById("name").innerText;
const preco = document.getElementById('preco').innerText;

function addToCardapio(){
    const precoTotal= preco * count;
    if(name !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<li>
          <b>${name}</b><br>
          <div class="alinhamento">
            <span><b>${count}x</b></span><p class="preco"><span>@$${preco} </span>$${precoTotal}</p>
            <button onclick="removerItem(this)"><img src="assets/images/icon-remove-item.svg" alt="X"></button>
          </div>
        </li>`;
        DessertList.appendChild(li);
        name.value = "";
    }
}

function removerItem(button){
    const li = button.parentElement;
    DessertList.removeAttribute(li);
}

