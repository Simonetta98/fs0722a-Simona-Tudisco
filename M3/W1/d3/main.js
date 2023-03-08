"use strict";
class Work_er {
    constructor(type, reddit, /**/ codredd, tasseinps, tasseirpef) {
        this.type = type;
        this.reddit = reddit;
        //
        this.codredd = codredd;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    /**/ describe() {
        return 'I am an ' + this.type + ', and I have a reddit of ' + this.reddit + '$ a year. ' + 'My taxed reddit is the ' + this.codredd + '% of ' + this.reddit + ', so ' + this.getTaxedReddit() + '. ' + 'The taxes I have to pay are ' + this.tasseinps + '% Inps and ' + this.tasseirpef + '% Irpef, ' +
            'so ' + this.getTasseInps() + '$ + ' + this.getTasseIrpef() + '$ = ' + this.getTotTax() + '$. ' + 'What remains to me is a total of ' + this.getRedditoAnnuoNetto() + '$ .';
    }
    //getUtileTasse?
    getTaxedReddit() {
        return this.reddit - ((this.reddit * this.codredd) / 100);
        //return the $ that'll be taxed
    }
    getTasseInps() {
        return this.getTaxedReddit() - (this.getTaxedReddit() - ((this.getTaxedReddit() * this.tasseinps) / 100));
        //return the $ amount payed for inps
    }
    getTasseIrpef() {
        return this.getTaxedReddit() - (this.getTaxedReddit() - ((this.getTaxedReddit() * this.tasseirpef) / 100));
        //return the $ amount payed for irpef
    }
    getRedditoAnnuoNetto() {
        return this.reddit - (this.getTasseInps() + this.getTasseIrpef());
        //return the reddit after taxes
    }
    /**/ getTotTax() {
        return this.getTasseIrpef() + this.getTasseInps();
    }
}
//Workers
class Worker1 extends Work_er {
    constructor(type, reddit, /**/ codredd, tasseinps, tasseirpef) {
        super(type, reddit, codredd, tasseinps, tasseirpef);
    }
}
class Worker2 extends Work_er {
    constructor(type, reddit, /**/ codredd, tasseinps, tasseirpef) {
        super(type, reddit, codredd, tasseinps, tasseirpef);
    }
}
class Worker3 extends Work_er {
    constructor(type, reddit, /**/ codredd, tasseinps, tasseirpef) {
        super(type, reddit, codredd, tasseinps, tasseirpef);
    }
}
let john = new Worker1('Artisan', 40000, 20, 5, 2);
//console.log(john)
//console.log(john.describe())
//console.log(john.getTaxedReddit())
//console.log(john.getTasseInps())
//console.log(john.getTasseIrpef())
//console.log(john.getRedditoAnnuoNetto())
let mary = new Worker2('Executive Manager', 60000, 30, 8, 6);
//console.log(mary)
//console.log(mary.describe())
let enry = new Worker3('Entrepreneur', 80000, 40, 12, 8);
//console.log(enry)
//console.log(enry.describe())
//DOM
var maryDom = document.getElementById('mary');
var johnDom = document.getElementById('john');
var enryDom = document.getElementById('enry');
maryDom.textContent = `${mary.describe()}`;
johnDom.textContent = `${john.describe()}`;
enryDom.textContent = `${enry.describe()}`;
