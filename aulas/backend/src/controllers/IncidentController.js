const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        // paginacao
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        //console.log( [count]);
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page-1) * 5 )
            .select([ 'incidents.*'
                        , 'ongs.name'
                        , 'ongs.email'
                        , 'ongs.whatsapp'
                        , 'ongs.city'
                        , 'ongs.uf'])

        response.header( 'X-Total-Count', count['count(*)'] );    
        //response.header( 'X-Total-Count', count['count(1)'] );    

        return response.json(incidents);
    },

    async create (request, response ) {
        const {
            title
            , description 
            , value
        } = request.body;

        const ong_id = request.headers.authorization;

        // A autenticação da Ong fica aqui no cabecalho da requisicao
        //request.headers;

        //const result = await connection('incidents').insert({
        const [id] = await connection('incidents').insert({ 
            title
            , description
            , value
            , ong_id
            ,
        });

        //const id = result[0];
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        console.log( id );
        console.log( ong_id ) ;

        // *** remover no final ***
        //await connection('incidents').where('ong_id', 'e4d59a51').delete();
        
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if( !incident ) {
            //return response.status(400).send();
            return response.status(400).json({ error: `Incident # ${id} is not found!` });
        }    

        if (incident.ong_id != ong_id ) {
            return response.status(401).json({ error: 'Operation not permited.'});
        }    

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
    
}