"use strict";
class BankAccount {
    //creo tot del bankaccount
    constructor(balance) {
        this.balanceInit = 0; // accessibile nella classe + nelle estensioni
        this.balanceInit = balance;
    }
    //deposito
    oneDeposit(sum) {
        this.balanceInit += sum;
        return this.balanceInit;
    }
    twoDeposit(sum1, sum2) {
        this.balanceInit += (sum1 + sum2);
        return this.balanceInit;
    }
    //prelievo
    err() {
        return `Withdraw declined, you have ${this.balanceInit}$ in total`;
    }
    success() {
        return `Withdraw accepted, you now have ${this.balanceInit}$ in total`;
    }
    oneWithDraw(sum) {
        if (this.balanceInit > sum) {
            this.balanceInit -= sum;
            return this.success();
        }
        else
            return this.err();
    }
    twoWithDraw(sum1, sum2) {
        if (this.balanceInit > (sum1 + sum2)) {
            this.balanceInit -= (sum1 + sum2);
            return this.success();
        }
        else
            return this.err();
    }
    //tot bankaccount con get
    get balance() {
        return this.balanceInit + '$ in total';
    }
}
//accounts
class MotherAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }
    addInterest(interest) {
        return this.balanceInit - ((this.balanceInit * interest) / 100) + '$, you paid a fee of ' + interest + '%';
    }
}
class SonAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }
}
let maria = new MotherAccount(120);
console.log(maria);
//console.log(maria.oneDeposit(10))
//console.log(maria.twoDeposit(10, 20))
//console.log(maria.oneWithDraw(10))
//console.log(maria.twoWithDraw(10, 1000))
console.log(maria.addInterest(10));
let mario = new SonAccount(90);
console.log(mario);
//DOM
//MOTHER
var button1 = document.getElementById('buttonMother1');
var p1 = document.getElementById('pMother1');
var button2 = document.getElementById('buttonMother2');
var p2 = document.getElementById('pMother2');
button1.addEventListener('click', balance);
//set MotherAccount and initial balance
function balance() {
    var mother = document.getElementById('mother').value;
    //console.log(mother)
    var setMother = new MotherAccount(mother);
    //console.log(setMother)
    p1.textContent = `${setMother.balance}`;
}
/*button2.addEventListener('click', deposit)
function deposit() {
    var mother:any = (<HTMLInputElement>document.getElementById('mother')).value;
    var dep:any = (<HTMLInputElement>document.getElementById('dep')).value;
//console.log(mother)
var setMother = new MotherAccount(mother)
//console.log(setMother)
p2.textContent = `${setMother.oneDeposit(dep)}`
}*/
//SON
