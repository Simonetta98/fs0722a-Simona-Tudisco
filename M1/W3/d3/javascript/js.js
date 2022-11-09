 

const buttonAdd = document.getElementById('add');
const lists = document.getElementById('lists');           
const textInput = document.querySelector('.textInput');

buttonAdd.addEventListener('click', aggiungiLista);

function aggiungiLista(event) {
    event.preventDefault();

    if (textInput.value === '') return;

    const li =  document.createElement('li');
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));
    
    const buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('id','delete');
    buttonDelete.appendChild(document.createTextNode('X'));    
    li.appendChild(buttonDelete);
    
    
    
    buttonDelete.addEventListener('click', cancella);

    function cancella(event){
        event.target.parentNode.remove(); 

    }
        
    li.addEventListener('click', taglia);

    function taglia(){
        li.className = 'cssLi';
        
    }
    
         
}



