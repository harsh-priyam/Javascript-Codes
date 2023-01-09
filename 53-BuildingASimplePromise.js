const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lotter Draw is happening 📍');

    setTimeout(function() {
        if (Math.random() >= 0.5) {
            resolve('You Win 💰');
        } else {
            reject(new Error('You Lost 💩'));
        }
    }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout 

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => console.log('4 second passed'));


// THIS IS CALL BACK HELL , A QUIET UGLY WAY TO CODE AND ABOVE IS THE ALTERNATIVE OF THIS SHIT 

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));