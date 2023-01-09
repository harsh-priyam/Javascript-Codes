const account = {
    owner: 'Harsh Priyam',
    movements: [200, 300, 400, 450],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);