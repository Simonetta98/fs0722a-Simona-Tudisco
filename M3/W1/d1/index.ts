console.log('hello, this is typescript :)')

var beCasual:any = Math.floor(Math.random() * 100) + 1;
console.log(beCasual)

var scoreOne:number = 0;
var scoreTwo:number = 0;

var content = (<HTMLDivElement>document.getElementById('winOne'));
var content2 = (<HTMLDivElement>document.getElementById('winTwo'));

var button = (<HTMLButtonElement>document.getElementById('buttonGuess'));

button.addEventListener('click', guess) 
function guess() {
    var pOne:any = (<HTMLInputElement>document.getElementById('playerone')).value;
    var pTwo:any = (<HTMLInputElement>document.getElementById('playertwo')).value;

  
    if ( pOne < 1 || pTwo < 1 || pOne > 100 || pTwo > 100  || isNaN(pOne) || isNaN(pTwo)) {
        console.log("Please Enter a number Between 1 to 100");

    } else {
        if (pOne == beCasual && pTwo != pOne) {
            console.log('player 1 WINS!')
            content.textContent = ' WINS! '  
            content2.textContent = ' ';   

        } else if (pTwo == beCasual && pOne != pTwo)  {
            console.log('player 2 WINS!')
            content2.textContent = ' WINS! '
            content.textContent = ' ';    
              
        } else if (pOne == beCasual && pTwo == beCasual ) {
            console.log('double win');
            content.textContent = ' both players won! ';
            content2.textContent = ' both players won! ';

        }else if (pOne == pTwo && pTwo != beCasual && pOne != beCasual ) {
            console.log('same');
            content.textContent = ' same guessed number ';
            content2.textContent = ' same guessed number ';
        }
         else if ((pOne - beCasual) > (pTwo - beCasual)) {
            console.log('player 1 is the closest!')
            content.textContent = 'closer than player 2!' 
            content2.textContent = '...' 
            
        } else if ((pOne - beCasual) < (pTwo - beCasual)) {
            console.log('player 2 is the closest!') 
            content2.textContent = 'closer than player 1!'
            content.textContent = '...'  
        }
    }
}