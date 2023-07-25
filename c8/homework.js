const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8080;

//Task 1
app.get('/', (req, res) => {

    const data = {
        cars: ['Car 1', 'Ferrari', 'Car 3'],
        books: ['Book 1', 'Book 2', 'Book3'],
        cities: ['New York', 'Sydney', 'Berlin']
    };

    res.send(`
        <h1>Home</h1>
        <h2>Cars:</h2>
        <u1>${data.cars.map(car => `<li>${car}</li>`).join('')}</u1>
        <h2>Books:</h2>
        <u1>${data.books.map(book => `<li>${book}</li>`).join('')}</u1>
        <h2>Cities:</h2>
        <u1>${data.cities.map(city => `<li>${city}</li>`).join('')}</u1>
    `);
});

//Task 2
app.get('/cars', (req, res) => {

    const {query} = req.query;
    const car = `Car ${query}`;

    res.send(`
    <h1>Single Car</h1>
    <p>${car}</p>
    `);
});

//Task 3 and 4

app.get('/users', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data;
        const userList = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');

        res.send(`
            <h1>Users</h1>
            <u1>${userList}</u1>
        `);

    })
    .catch(error => {
        res.send(`
            <h1>Error</h1>
            <p>Failed to fetch users</p>
        `)
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})