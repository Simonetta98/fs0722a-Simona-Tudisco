function digita(elemento){                                     //permetto a tutto quello che digito di stare nel display
    let tastoDigitato= elemento.value;
    document.getElementById('display1').value += tastoDigitato;
}
function tot(){                                              //eseguo le operazioni che ora spuntano sul display
    let display= document.getElementById('display1');
    display.value= eval(display.value) ;                    //eval(anche se evil) mi permette di convertire il tutto in numeri (se no gli input rimangono stringhe)
}
function c(){                                                // tasto elimina tutto
    let elimina= document.getElementById('display1');
    elimina.value = '';
}
function ac(){                                               //tasto cancella ultima cifra 
    let canc= document.getElementById('display1').value;
    canc= canc.slice(0,-1);
    document.getElementById('display1').value= canc;
    
}
function ics(){                                            //quando premo 'x' sulla calcolatrice il suo valore in display diventa '*'
    let x= document.getElementById('display1');
    x.value += '*';
}
function punto(){
    let virgola= document.getElementById('display1');     //quando premo ',' sulla calcolatrice il suo valore in display diventa '.'
    virgola.value += '.' ;
}

// funzioni cambia COVER

function cambia(){
    document.getElementById('calcolatrice').style.backgroundImage="url(../pics/boh.webp)"
}
function cover2(){
    document.getElementById('calcolatrice').style.backgroundImage="url(../pics/cubi.jpeg)"
}
function cover3(){
    document.getElementById('calcolatrice').style.backgroundImage="url(../pics/fiamme.jpeg)"
}