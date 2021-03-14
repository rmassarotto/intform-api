const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3005;

const alternativa = require('./routes/alternativa');
const tipo = require('./routes/tipo');

app.use(bodyParser.json());

app.use('/alternativa', alternativa)
app.use('/tipo', tipo)

app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`);
})