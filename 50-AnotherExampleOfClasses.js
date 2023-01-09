class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account , ${owner}`);
    }

    getMovements() {
        return this._movements;
    }


    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val)
    }

    approve(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approve(val)) {
            this.deposit(val);
        }
    }
}


const acc1 = new Account('Harsh', 'Rupee', 1111);

// acc1.movements.push(270);
// acc1.movements.push(-72);

acc1.deposit(230);
acc1.withdraw(-40);
acc1.requestLoan(1000);
acc1.approve(1000);

console.log(acc1);