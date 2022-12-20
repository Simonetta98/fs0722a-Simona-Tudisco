class BankAccount {
    protected balanceInit: number = 0;  // accessibile nella classe + nelle estensioni

    //creo tot del bankaccount

    constructor(balance: number) {
        this.balanceInit = balance
    }

    //deposito

    oneDeposit(sum: number): number {
        this.balanceInit += sum;
        return this.balanceInit
    }
    twoDeposit(sum1: number, sum2: number): number{
        this.balanceInit += (sum1 + sum2);
        return this.balanceInit
    }

   //prelievo

   err(): any{
    return `Withdraw declined, you have ${this.balanceInit}$ in total`
    }
    success(): any {
        return `Withdraw accepted, you now have ${this.balanceInit}$ in total`
      }


    oneWithDraw(sum: number) : number {
        if (this.balanceInit > sum) {
            this.balanceInit -= sum;
            return this.success() ;
        }
        else return this.err();
    }
    

    twoWithDraw(sum1: number, sum2: number) : number {
        if (this.balanceInit > (sum1 + sum2)) {
            this.balanceInit -= (sum1 + sum2);
            return this.success();
        }
        else return this.err();
    }

   //tot bankaccount con get

    get balance() {
        return this.balanceInit + '$ in total';
    }

} 

//accounts

class MotherAccount extends BankAccount {
    constructor(balance: number){
        super(balance)
    }
    
    addInterest(interest: number){
        return this.balanceInit - ((this.balanceInit * interest) / 100) + '$, you paid a fee of ' + interest + '%'
    }

}
class SonAccount extends BankAccount {
    constructor(balance: number){
        super(balance)
    }
}


let maria = new MotherAccount(120)
console.log(maria)
//console.log(maria.oneDeposit(10))
//console.log(maria.twoDeposit(10, 20))
//console.log(maria.oneWithDraw(10))
//console.log(maria.twoWithDraw(10, 1000))
console.log(maria.addInterest(10))

let mario = new SonAccount(90)
console.log(mario)

//DOM

var button1 = (<HTMLButtonElement>document.getElementById('buttonMother1'));
var p1 = (<HTMLParagraphElement>document.getElementById('pMother1'));

var button2 = (<HTMLButtonElement>document.getElementById('buttonMother2'));
var p2 = (<HTMLParagraphElement>document.getElementById('pMother2'));

button1.addEventListener('click', balance) 
//set MotherAccount and initial balance
function balance() {
var mother:any = (<HTMLInputElement>document.getElementById('mother')).value;
//console.log(mother)
var setMother = new MotherAccount(mother)
//console.log(setMother)
p1.textContent = `${setMother.balance}`

}

button2.addEventListener('click', deposit)
function deposit() {
 //

}