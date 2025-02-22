const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is the Home Page.');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});