const express = require('express');

// pacote que vem no node
// é possivel usar o método para gerar uma hash
//const crypto = require('crypto');
// Foi transferido para OngController.js

// Importar a conexão
//const connection = require('./database/connection');
// Foi transferido para OngController.js

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//routes.get('/ongs', async (request, response ) => {
//    const ongs = await connection('ongs').select('*');
//    return response.json(ongs);
//})

// 1:20:00
routes.post('/sessions', SessionController.create);

// 1:00:00
routes.get('/ongs', OngController.index);
// 0:52:00
routes.post( '/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/*
routes.post('/ongs', async (request, response) => {
    // foi transferido para OngController.js
    /*
    const data = request.body;
    console.log(data);
    */
    // Ou fazer a desestruturaçao
    /*
    const { name
            , email
            , whatsapp
            , city
            , uf 
            } = request.body; 

    const id = crypto.randomBytes(4).toString('HEX');
    //console.log(name);        

    await connection('ongs').insert({
        id
        , name
        , email
        , whatsapp
        , city
        , uf
    })
    return response.json( {id} );
    /*
});
*/
// Exportando as rotas
module.exports = routes;
