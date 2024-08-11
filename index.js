const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'docs')));

app.listen(8080, () => console.log("Listening http://localhost:8080"))
