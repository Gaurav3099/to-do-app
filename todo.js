// var inputBox = document.getElementById('todo-input')
// var addBtn = document.getElementById('add')
// var updateBtn = document.getElementById('update')
// var deleteBtn = document.getElementById('delete')
// var listul = document.getElementById('todo-list')
// var listli = document.getElementById('li')

// function inputLength(){
//     console.log(inputBox.value.length)
//     return inputBox.value.length;
// }

// function listLength(){
//     return listli.length;
// }

// function createListElement(){
//     console.log('add')
//     var listli = document.getElementById('li');
//     listli.appendChild(document.createTextNode(inputBox.value));
//     listul.appendChild(listli);
//     inputBox.value='';

//     function crossOut(){
//         listli.classList.toggle('done')
//     }

//     listli.addEventListener('click', crossOut);

//     var deleteBtn = document.getElementById('button');
//     deleteBtn.appendChild(document.createTextNode('X'));
//     listli.appendChild(deleteBtn);
//     deleteBtn.addEventListener('click', deleteListitem);

//     function deleteListitem(){
//         listli.classList.add('delete');
//     }
// }

// function addListAfterClick(){
//     // if(inputLength() > 0){
        
//         if(inputBox.value.length != null){
//         createListElement();
//     }
// }

// // function addListAfterKeyPress(){
// //     if(inputLength() > 0 && event.which == 13) {
// //         createListElement();
// //     }
// // }

// addBtn.addEventListener('click', addListAfterClick());
// // inputBox.addEventListener('keypress', addListAfterKeyPress());

var inputBox = document.getElementById('todo-input')
var addBtn = document.getElementById('add')
var updateBtn = document.getElementById('update')
var deleteBtn = document.getElementById('delete')
var list = document.getElementById('todo-list')
var listli = document.getElementById('li')

var currentItemValue = '';
inputBox.addEventListener('input', function(e){
    currentItemValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        addListItem();
    }
})

function createNewNode() {
    var newListElement = document.createElement('li')
    var newDelete = document.createElement('button')
    var textNode = document.createTextNode(currentItemValue);
    var DeleteTextNode = document.createTextNode('X')
    newListElement.appendChild(textNode);
    newDelete.appendChild(DeleteTextNode)
    newListElement.id = "item" + (list.childElementCount + 1);
    newListElement.appendChild(newDelete);
    newDelete.addEventListener('click',function(){
        // console.log('d')
        newListElement.classList.add('delete');
    })

    function crossOut(){
        newListElement.classList.toggle('done')
            }

    newListElement.addEventListener('click', crossOut)
    return newListElement;
}

function addListItem() {
    if(currentItemValue != undefined && currentItemValue != null && currentItemValue != ''){
        var newListElement = createNewNode();
        list.append(newListElement);
        console.log(list.childElementCount);

        inputBox.value = '';
        currentItemValue = '';

    }else{
        alert('Please enter a valid task')
    }
}

addBtn.addEventListener('click', addListItem);

updateBtn.addEventListener('click', function(){
    
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement)
});

deleteBtn.addEventListener('click', function(){
    var firstElement = list.firstChild;
    list.removeChild(firstElement);
})