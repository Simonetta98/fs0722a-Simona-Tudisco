 

const buttonAdd = document.getElementById('add');              
const lists = document.getElementById('lists');           
const textInput = document.querySelector('.textInput');

buttonAdd.addEventListener('click', aggiungiLista);           /* al bottone ADD al momento del click si verificano le istruzioni descritte 
                                                                  nella funzione aggiungiLista*/

function aggiungiLista(event) {                   /* aggiungiLista ha come paramento l'event (si riferisce al click),
                                                      e con preventDefault() evito la risposta automatica del browser di fare un refresh
                                                      in modo che i miei <li> possano rimanere presenti anche dopo il click */ 
    event.preventDefault();

    if (textInput.value === '') return;

    const li =  document.createElement('li');                     /* mi vado a creare i miei elementi <li> che saranno figli di <ul class="lists">  */
    lists.appendChild(li);    
    li.appendChild(document.createTextNode(textInput.value));      /* al loro interno inserisco quello che vado a scrivere nell'input*/ 
    
    const buttonDelete = document.createElement('button');      /* aggiungo il bottone delete */ 
    buttonDelete.setAttribute('id','delete');                     /* gli do un id*/ 
    buttonDelete.appendChild(document.createTextNode('X'));     /* al suo interno c'è una X */
    li.appendChild(buttonDelete);                               /* sono figli degli elementi <li>*/
    
    
                                                           /*BOTTONE DELETE */
    
    buttonDelete.addEventListener('click', cancella);        /* la funzione cancella permette al bottone delete
                                                                  di prendere il suo elemento padre (quindi <li>) 
                                                                  ed elminarlo al click */

    function cancella(event){
        event.target.parentNode.remove(); 
                                                       /*TAGLIA TESTO */
    }
        
    li.addEventListener('click', taglia);           /* la funzione taglia (sempre al click) mi dice
                                                          di aggiungere una classe al <li> appena cliccato
                                                          che in css ha la proprietà text-decoration che mi taglia il testo */

    function taglia(){
        li.className = 'cssLi';
        
    }
    
         
}



