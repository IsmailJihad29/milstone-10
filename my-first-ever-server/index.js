const express = require('express');

const app = express();

const port = 5000

app.get('/', (req, res) => {
    res.send('hey this is my  First Ever Server')
})

app.listen(port, () => {
    console.log(`Listing server on port: ${port}`)
})
