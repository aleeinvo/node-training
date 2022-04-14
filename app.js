const fs = require('fs');

console.log('start');

fs.readFile('./data.json', 'utf-8', (error, data) => {
    if(error) {
        throw error;
    }

    let users = JSON.parse(data.trim()).users;

    users.forEach(user => {
        console.log(user);
    })
});

console.log('end');