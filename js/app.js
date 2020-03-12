

var list;
list = document.getElementById('List');
var it;
var template;
var card;
var box;
var cuatro;
var uno;
candyDeck = document.getElementById("Deck");
box = document.getElementById("topBox");
box.addEventListener(
    'click',
    addCandy
);
candyDeck.addEventListener(
    'click',
    addCandy
)
var getForm = document.getElementById('form');
getForm.addEventListener(
    'submit',
    post
)
function addCandy(e) {
    var candy = e.target.alt
    var li = document.createElement('li');
    li.classList = 'list-grpup-item item';
    li.appendChild(document.createTextNode(candy));
    var btnDel = document.createElement('a');
    btnDel.classList = 'delete btn btn-sm';
    btnDel.appendChild(document.createTextNode('X'))
    li.appendChild(btnDel);
    list.appendChild(li);
}
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

function post(e) {

    e.preventDefault;
    list = list.children;
    var elements;
    elements = [

    ]
    for (let i = 0; i < list.length; i++) {
        const element = {
            Nombre: list[i].firstChild.data

        };
        elements.push({
            element
        });
        const url = './php/post.php';
        const options = {
            method: 'POST',
            body: 'Hola mundo',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(
            url,
            options
        )
            .then((response) => response.json())
            .then((res) => console.log(res))
            .catch((err) => console.error('error', err));


    }




}
