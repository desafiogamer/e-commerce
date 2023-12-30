import {foodItem} from './fooditem.js'
var enderoco = document.querySelector('#endereco')
function close() {
    enderoco.classList.remove('ativo')
}

function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var frutas = document.getElementById('Frutas');
    var chocolate = document.getElementById('Chocolate');
    var Adicionais = document.getElementById('Adicionais');


    

    const biryaniData = foodItem.filter((item) => item.category =='Copo Pronto');
    const chickenData = foodItem.filter((item) => item.category =='Especial');
    const PaneerData = foodItem.filter((item) => item.category =='Montar Copo');
    const vegetableData = foodItem.filter((item) => item.category =='Frutas');
    const chineseData = foodItem.filter((item) => item.category =='Chocolate');
    const Adicional = foodItem.filter((item) => item.category == 'Adicionais');

    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        

        var heart= document.createElement('i');
        heart.setAttribute('class','bi bi-plus-lg add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemDescricao = document.createElement('p');
        itemDescricao.setAttribute('id', 'item-Descricao');
        itemDescricao.innerText = item.descricao;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Preço: ' + item.price+',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemDescricao);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
        
    })


    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var heart= document.createElement('a');
        heart.setAttribute('class','bi bi-plus-lg add-to-cart');
        heart.setAttribute('id',item.id)
        heart.setAttribute('href', '#Frutas')

        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemDescricao = document.createElement('p');
        itemDescricao.setAttribute('id', 'item-Descricao');
        itemDescricao.innerText = item.descricao;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Preço: ' + item.price + ',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemDescricao);
        itemCard.appendChild(itemPrice);
        
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var heart= document.createElement('i');
        heart.setAttribute('class','bi bi-plus-lg add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Preço: ' + item.price + ',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var heart= document.createElement('i');
        heart.setAttribute('class','bi bi-plus-lg add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Preço: ' + item.price + ',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        frutas.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var heart= document.createElement('i');
        heart.setAttribute('class','bi bi-plus-lg add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Preço: ' + item.price + ',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        chocolate.appendChild(itemCard)
        
    })

    Adicional.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card')

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('i');
        heart.setAttribute('class', 'bi bi-plus-lg add-to-cart');
        heart.setAttribute('id', item.id)

        cardTop.appendChild(heart);


        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Preço: ' + item.price + ',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);


        Adicionais.appendChild(itemCard)

    })

}
displayItems();


const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

var cartData= [];
const testeNomes = [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Já está adicionado ao carrinho!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
}


function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.classList.add('teste')
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span = document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price+',00 R$';
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}


function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Atualmente nenhum item no carrinho!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item: ' + cartData.length;
    document.getElementById('total-price').innerText= 'Preço total: ' + sum+',00 R$';
    document.getElementById('m-total-amount').innerText= 'Preço total: ' + sum;+',00 R$'
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
    }
    else{
        alert("Atualmente nenhum item no carrinho!");
    }
}



window.onresize= window.onload= function(){
    var size= window.screen.width;
    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if(size>800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

async function MensagemWhat(rua, Bairro, Numero, NumeroDeTelefone, valuesect, valueselector, dataAtual, horarioAtual, valores, preco, troco) {
    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

    const response = await fetch(GZAPPY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user_token_id': 'e606083e-6558-4d3e-9d50-d003f4f7bdbf'
        },
        body: JSON.stringify({
            instance_id: 'G1W4V2N0T77KVSDH312KEQK5',
            instance_token: '91a1a5e3-4d15-47a5-9549-6ffd50069943',
            message: [`
👋 Olá, Tudo bem ?
🗓️ ${dataAtual} ⏰ ${horarioAtual}
Seu pedido está sendo processado


*Tipo de serviço: ${valueselector}*

Produtos: 
${valores}

🏠 Rua: ${rua}
   Bairro: ${Bairro}
   Numero da casa ${Numero}

Tipo de pagamento: ${valuesect}
Troco pra: ${troco}
Seu troco:  R$

VALOR ${preco}
            
Obrigado pela preferência, se precisar de algo é só chamar! 😉`
            ],
            phone: `55${NumeroDeTelefone}`
        })
    })

    const data = await response.json()
}

enderoco.innerHTML = `
        <button class="voltar"><i class="bi bi-arrow-right"></i></button>
        <span>Rua</span>
        <input class="rua" type="text">
        <span>Bairro</span>
        <input class="bairro" type="text">
        <span>Numero da casa</span>
        <input class="numero" type="text">
        <span>Numero de telefone</span>
        <input class="NumeroTelefone" type="text" placeholder="Ex: 19 923456789">
        <span>Tipo de pagamento:</span>
        <select name="" id="Select">
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
        </select>
        <span>Troco para:</span>
        <input class="troco" type="text" placeholder="A caso o metodo de pagamento for dinheiro">
        <span>Retirada no:</span>
        <select name="" id="Seletor">
            <option value="Local">Local</option>
            <option value="Delivery">Delivery</option>
        </select>
        <button id='enviar'>Enviar Pedido</button>
        `

var voltar = document.querySelector('.voltar')
var enviar = document.querySelector('#enviar')

voltar.addEventListener('click', function () {
    enderoco.classList.remove('ativo')
})

enviar.addEventListener('click', async function vamosla(){
    const values = Object.values(cartData);

    for (const value of values) {
        const NomesProdutos = value.name
        const quantidadeProdutos = value.quantity
        const PrecoProduto = value.price
        const juntar = `${quantidadeProdutos}X ${NomesProdutos} - ${PrecoProduto},00 $
`
        testeNomes.push(juntar)
    }

    var valores = testeNomes

    var preco = document.getElementById('total-price').innerText
    var rua = document.querySelector('.rua').value
    var Bairro = document.querySelector('.bairro').value
    var Numero = document.querySelector('.numero').value
    var NumeroDeTelefone = document.querySelector('.NumeroTelefone').value
    var select = document.querySelector('#Select')
    var valuesect = select.options[select.selectedIndex].value
    var troco = document.querySelector('.troco').value

    var seletor = document.querySelector('#Seletor')
    var valueselector = seletor.options[seletor.selectedIndex].value

    const data = new Date()
    var day = String(data.getDate()).padStart(2, '0')
    var mes = String(data.getMonth() + 1).padStart(2, '0')
    var ano = data.getFullYear()
    var dataAtual = `${day}/${mes}/${ano}`

    var horas = data.getHours()
    var minutos = data.getMinutes()
    var horarioAtual = `${horas}:${minutos}`
    
    if (Numero) {
        await MensagemWhat(rua, Bairro, Numero, NumeroDeTelefone, valuesect, valueselector, dataAtual, horarioAtual, valores, preco, troco)
    }
})
