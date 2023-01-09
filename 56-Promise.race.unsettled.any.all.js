const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

Promise.Race

    (async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/'italy'`), getJSON(`https://restcountries.com/v3.1/name/'japan'`), getJSON(`https://restcountries.com/v3.1/name/'india'`)
    ]);
    console.log(res[0]);
})();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error('Request took too long!!'));
        }, sec * 1000);
    });
};

Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/'australia'`), timeout(5),
    ])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err))


// Promise.allSettled ~~~~~~~~~~~~~~~

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Again Success'),
]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.all ~~~~~~~~~~~~~~~

Promise.all([
    Promise.resolve('Successfull'),
    Promise.reject('Failure'),
    Promise.resolve('Enough Successfull'),
]);
// and hence the diffrence between allsettled and all

Promise.any([
    Promise.resolve('Successfull'),
    Promise.reject('Failure'),
    Promise.resolve('Enough Successfull'),
]);