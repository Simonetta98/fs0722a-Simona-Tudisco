/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function str (stringa1, stringa2){
  var newStringa1= stringa1.slice(2, stringa1.lenght);
  var newStringa2= stringa2.slice(0, -3);
  var nuovaStringa= newStringa1 + ' ' + newStringa2;
  var finalStringa= nuovaStringa.toUpperCase();
  return finalStringa
}
var a= 'simona'
var b= 'tudisco'
console.log(str(a, b))

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

function disp(){
  var num=[]
  for(i=1; i<=100; i+=2){
    var agg= num.push(i)  
  }

  return num 
}
console.log(disp())


/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

  function multp(){
    var nUm=[]
    for(i=0; i<=100; i++){
      if(i %5 ==0){
      var agg= nUm.push(i) 
      } 
    }
  
    return nUm 
  }
  console.log(multp())


/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */


  function rand(){
    var arr=[]
    for(i=0; i<=9; i++){
      
      var rand= Math.floor(Math.random()*100)+1
      var add= arr.push(rand)
    }
  
    return arr 
  }
  console.log(rand())
  

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

  var mixNum= [1,2,4,5,7,8]
  var resultMixNum= mixNum.filter(checkPari)

  function checkPari(num){
    return num %2==0
  }
  console.log(resultMixNum)

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */
var numeriArr= [5,1,3,2,1]
var totNumeriArr= numeriArr.reduce(tot)
function tot(valore, indice){
  return valore+indice
}
console.log(totNumeriArr)

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
var numbers= [2,1,3,2,1]

numbers.forEach(myFunction)

function myFunction(n, index, arr) {
  arr[index] = n + 1;
}
console.log(numbers)

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
/*
{
 let funct= function(arr){
  let result= []
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].length)
  }
  console.log(result)

 }
 let array = ['epicode','ciao','ciaociaociao']
 sostituisciStr(array)
}
*/


/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

 var mixNum= [1,2,4,5,7,8]
  var resultMixNum= mixNum.filter(checkPari)

  function checkPari(num, index, arr){
    
      if(num %2!==0){
        delete arr[num]
        return arr
      }
      
  }
  console.log(resultMixNum)

  /* 
  function checkPari(arr)
  while(i<arr.length){
    if(arr[i]%2==0)
    arr.splice(i,1);
    i++;
  }
  
  */



/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */





/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let arr= [1, 3, 5]
let arr2= arr.reverse()
console.log(arr2)


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
console.log(movies)

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/


let filmVecchio= movies.reduce((previous, current)=>{
  if(previous.Year < current.Year){
    return previous
  }
  else{
    return current
  }
})

console.log(filmVecchio)


/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function totFilm(arr){
  var tot= arr.length
  return tot

}
console.log(totFilm(movies))


/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/




/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/



/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
