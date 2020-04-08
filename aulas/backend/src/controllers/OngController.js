


// Vide em 1:02:00

const crypto = require('crypto');

// Importar a conexão
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        /*
        const data = request.body;
        console.log(data);
        */
        // Ou fazer a desestruturaçao
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
    }
};