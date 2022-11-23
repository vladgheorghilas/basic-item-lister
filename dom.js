/* let button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e){
    /* document.querySelector('h1').textContent="Changed";
    document.querySelector('main').style.backgroundColor='#f4f4f4' */
    //console.log(e);
    /* console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    let output = document.getElementById('output');
    output.innerHTML='<h3>'+e.target.id+'</h3';

    console.log(e.type); */
    /* console.log(e.clientX);
    console.log(e.clientY); */
    /* console.log(e.offsetX);
    console.log(e.offsetY); */
    /* console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey); */
/* let button = document.getElementById('button');
var box= document.getElementById('box'); */

/* button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent); */
/* button.addEventListener('mousedown', runEvent); */
/* button.addEventListener('mouseup', runEvent); */
/* button.addEventListener('mouseup', runEvent); */

/* box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseout', runEvent); */
/* let output = document.getElementById('output'); */

/* box.addEventListener('mousemove', runEvent); */

/* var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select'); */

/* itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent); */
/* itemInput.addEventListener('keypress', runEvent); */

/* itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent); */

/* itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent); */

/* itemInput.addEventListener('input', runEvent); */

/* select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent); */

/* form.addEventListener('submit', runEvent);

function runEvent(e){
     console.log('EVENT TYPE: '+e.type); */
   /*  e.preventDefault(); */
    /* console.log(e.target.value);
    document.getElementById('output').innerHTML=`<h3>${e.target.value}</h3>`;  */
    /* output.innerHTML= '<h3> MouseX: '+e.offsetX+ ' </h3><h3>MouseY : '+e.offsetY + ' </h3>'; */
    /* box.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`; */


/* } */

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//FORM SUBMIT EVENT

form.addEventListener('submit', addItem);

// ADD ITEM

function addItem(e){
    e.preventDefault();
    // get input value
    let newItem=document.getElementById('item').value;
    // create new li element
    let li=document.createElement('li');
    // add class
    li.classList.add('list-group-item');
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
    // create delete button element
    let deleteBtn = document.createElement('button');
    // add classes to delete button
    deleteBtn.classList.add('buttons','delete');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
}

//Delete event

itemList.addEventListener('click', removeItem);
 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

let filter= document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    console.log(text);
    // get lis
    let items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
            item.style.display = 'block';
        else
            item.style.display = 'none';
        
    });
}