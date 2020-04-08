
const express = require('express');

// 1:33:00
// $ npm install cors
const cors = require('cors');

const routes = require('./routes');

const app = express();


/*
quando for pra prd enviar como param o endereco que podera acessar
app.use(cors( {
    origin: 'http://meuapp.com'
}))
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


