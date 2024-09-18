let btnConfirm = document.getElementById('confirm-order');


let quantidade = document.querySelector('.quantidade');



function abreBotao(btnAdd, qtd){
    btnAdd.classList.add('abrirQuantidade');
    qtdGlobal = qtd;
}

function fechaBotao(){
    btnAdd.classList.remove('abrirQuantidade');
    count = 0;
}

btnConfirm.addEventListener('click', fechaBotao)


function verificaMenos(){
    qtdGlobal --;
    quantidade.textContent = qtdGlobal;
    if(qtdGlobal === 0)
    {
        fechaBotao();
    }
}

function verificaMais(){
    parseInt(qtdGlobal);
    qtdGlobal ++;
    quantidade.textContent = qtdGlobal;
}



const DessertList = document.getElementById('dessertsList');


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

