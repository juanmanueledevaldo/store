
get();
var Merch;
var list;
list = document.getElementById('List');

var it;
var template;
var card;
var box;
var art;
var cuatro;
var candyDeck;
candyDeck = document.getElementById("Deck");
box = document.getElementById("topBox");
bax = document.getElementById("tapBox");
var uno;
box.addEventListener(
    'click',
    addCandy
);
function addCandy(e) {
    var candy =e.target.alt
    var li = document.createElement('li');
    li.classList = 'list-grpup-item';
    li.appendChild(document.createTextNode(candy));
    var btnDel = document.createElement('a');
    btnDel.classList = 'delete btn btn-sm';
    btnDel.appendChild(document.createTextNode('X'))
    li.appendChild(btnDel);
    list.appendChild(li);

}
it = 0;
list.addEventListener(
    'click',
    deleteCandy
);
function deleteCandy(e) {
    if (e.target.classList.contains('delete')) {
        console.log(e);
        var the = e.target.parentElement;
        if (confirm('¿Are you sure broo?')) {
            list.removeChild(the);
        }
    }
}
function dbl(id) {

    $url = './php/post.php';
    uno = id;
    fetch($url, {
        method: 'POST',
        body: JSON.stringify(uno),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((res) => {
            console.log(res);

        })
        .catch((err) => {
            console.log(err);


        });

}
function get() {
    fetch("./php/get.php").then(res => res.json()).then(res => {
        Merch = res;
        Merch.forEach(product => {
            it++;
            if (it < 5) {
                art = `
        <div id="top" class="col">
            <div class="card-body col">
                <a class='add'><img height="120" width="120" src="${product.picture}" alt="${product.name}"></a>
            </div>
        </div>
        `;
                box.innerHTML += art;
            }
            card = `
        <div class=" mb-4 shadow-sm">
            <div id="card-header" class="">
                <h4 class="my-0 font-weight-normal">${product.name}</h4>
            </div>
            <div class="card-body">
                <a ondblclick="dbl()"> <img height="240" width="240" src="${product.picture}" alt="${product.name}" ></a>
                    <p>${product.price} pesos</p>
            </div>
        </div>
        `;
            candyDeck.innerHTML += card;
        });

    })
}