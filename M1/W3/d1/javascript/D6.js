/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*function area(l1,l2){
    return l1*l2
}
var areaRettangolo= area(10,5)
console.log(areaRettangolo)*/
const area = function(l1, l2){
    return l1 * l2
}
const areaResult = area(3, 4)
console.log (areaResult)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*function crazySum(numero1, numero2){
    if(numero1 != numero2){
    return numero1+numero2
   }
   else{
    return (numero1+numero2)*3
   }   

}
var prova= crazySum(4,4)
console.log(prova)
var prova2= crazySum(3,4)
console.log(prova2)*/

const crazySum = function(numero1, numero2){
    if(numero1 === numero2){
        return (numero1 + numero2)*3
    }
    else{
        return (numero1 + numero2)
    }
}
console.log(crazySum(3,3))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(numero1){
    if(numero1 > 19)
    return (numero1 - 19)*3
    else{
        return numero1 - 19
    }
}
var vediamo= crazyDiff(20)
console.log(vediamo) */

const crazyDiff= function(numero1){
    if(numero1 > 19){
    return Math.abs(numero1 - 19)*3
    }
    else{
        return Math.abs(numero1 - 19)
    }
}
console.log(crazyDiff(10))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (n >= 20 && n <= 100 || n == 400){
        return true;
    }
    else{
        return false
    }
    
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*function epify(string){
    if(string.includes("EPICODE")){
        return...
    }
}
*/
/*

const epify = function(str){
    if(str.startsWith('EPICODE')){
        return str
    }
    else{
        return 'EPICODE' + str
    }
}

console.log(epify('EPICODERS'));
console.log(epify('Hello'));
*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    if (n >= 0 && n %3 ===0){
        console.log('è multiplo di 3')
    }
    else if (n >=0 && n %7 ===0){
        console.log('è multiplo di 7')
    }
    else{
        console.log('non è multiplo nè di 3 nè di 7')
    }
}
var check= check3and7(5)
console.log(check)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
 const reverseString= function (str){
    let splitted= str.split('');
    let reversed= splitted.reverse();
    let string= reversed.join('')
    return string
 }
 console.log(reverseString('EPICODE'))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


const upperFirstPhrase= function(str){
    let words= str.split('');
    let finalString= []
    for(let i= 0; i < words.lenght; i++){
        let firstChar= words[i].charAt(0);
        let upperCaseChart= firstChar.toUpperCase();
        let cutString= words[i].slice(1);
        let finalWord= upperCaseChart + cutString;
        finalString.push(finalWord)
    }
    console.log(finalString.join(''));
}
upperFirstPhrase('Hello world');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString= function(str){
return str.slice(1, -1)
}
console.log(cutString('epicode'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom= function(n){
   const arr = []
   for (let i = 0; i < n; i++ ){
    arr.push(Math.floor(Math.random()*10))
   }
   return arr
   
}
console.log(giveMeRandom(5));
