// SET-TIMEOUT Function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ingredients = ['Cheese','Corn','Tomato'];
setTimeout((ing1 , ing2 ,ing3) => {
    console.log(`Your Pizza 🍕 with ${ing1},${ing2} and ${ing3} is Ready Sir!!`);
}, 3000 , ...ingredients);

// SET-INTERVAL FUNCTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
MyClock = function () {
    const now = new Date();
    const hour = `${now.getHours()}`.padStart(2,0);
    const mins = `${now.getMinutes()}`.padStart(2,0);
    const secs = `${now.getSeconds()}`.padStart(2,0);
    console.log(`${hour} : ${mins} : ${secs}`);
}
setInterval(() => {
    MyClock();
}, 1000);