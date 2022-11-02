/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//1- STRINGA: può essere una sequenza di caratteri o un solo carattere, racchiusi tra due apici o doppie virgolette//
var stringa1= 'Simona'
var stringa2= "Tudisco"
console.log(typeof stringa1)
console.log(typeof stringa2)

//2- NUMERO: può essere sia intero che decimale, non è racchiuso tra apici o virgolette//
var numero1= 5
var numero2= 5.25
console.log(typeof numero1)
console.log(typeof numero2)

//3- ARRAY: è una lista di valori (stringa, numero, oggetti ecc.) numerati all'interno di parentesi quadre [] //
var array=[5, 3, 'Simona']
console.log(array)

//4- OGGETTO: è una lista di valori a cui viene attribuito un nome all'interno di parentesi graffe {} //
var oggetto= {
  nome: 'Simona',
  cognome: 'Tudisco'
}
console.log(typeof oggetto)

//5- BOOLEANO: mi da un true o un false, non sono racchiusi da virgolette o apici//
var booleano= true
var booleano2= false
console.log(booleano, booleano2)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var name= 'Simona';
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var primoNumero= 12;
var secondoNumero= 20;
console.log(primoNumero+secondoNumero)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x= 12;
console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name= 'Tudisco';
console.log(name)
const MIO_NOME= 'Simona'
console.log(MIO_NOME)
/* const MIO_NOME= 'Mario'  //mi da errore perchè una variabile const non può essere riassegnata //
console.log(MIO_NOME) */ 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
var x= 12
var y= 4
console.log(x-y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var name1='john'
var name2='John'
console.log(name1!=name2)


