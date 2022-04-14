const promise = new Promise((resolve, reject) => {
    reject('oops');
    setTimeout(() => {
        resolve('We doing fine for now!');
    }, 1e3);
});

promise.then(data => {
    console.log(data);
}).catch((reson) => {
    console.log(reson);
})
.finally(() => {
    console.log('We are done here.');
})

console.log('still waiting');