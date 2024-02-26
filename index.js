const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("hello rani");
});

app.listen(3000, () => {
    console.log("SERVER STATED!");
});