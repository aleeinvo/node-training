const promise = Promise.reject('oops');

promise.then(data => {
    console.log(data);
}).catch((reson) => {
    console.log(reson);
})
.finally(() => {
    console.log('We are done here.');
})

console.log('still waiting');