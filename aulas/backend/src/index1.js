
// importar as funcionalidades do express que foi instalado
const express = require('express');

// criar a variavel que contera a aplicação
const app = express();

// ***
// As instruções abaixo evitam a mensagem "Cannot Get /"
/*
app.get('/', (request, response) => {
    return response.send('Hello World...');
})

Rota / Recurso (normalmente ligado a alguma entidade ou tabela no banco)
app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0'
        , aluno: 'Antal S Varga'
    });
});

Métodos HTTP:
    . GET : Buscar/listar uma informação do back-end
    . POST: Criar uma informação no back-end
    . PUT : Alterar uma informação no back-end
    . DELETE : Apagar uma informação  


app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0'
        , aluno: 'Antal S Varga'
    });
});

*/
// Exemplo testado no insomnia ok
/*
app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0'
        , aluno: 'Antal S Varga'
    });
});
*/


/*
    Tipos de parâmetros
    Query Parms: Parâmetros nomeados enviados na rota após o "?"
                 Servem para filtros, paginação

    Route Parms: Parâmetros utilizados para identificar recursos (users)  
    Request Body: Corpo da requisicao utilizado para criar ou alt recursos
*/


// No insomnia alterei para GET com a url abaixo
// http://localhost:3333/users?name=Antal&page=2&idade=52 ...
// funcionou ok
/*
app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0'
        , status: 'QUARENTENA'
        , aluno: 'Antal S Varga'
    });
});
*/
// Route parms = id
// retornar os dados de um único usuario
// No insomnia alterei para GET com a url abaixo
// http://localhost:3333/users/1
/*
app.get('/users/:id', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0'
        , status: 'QUARENTENA'
        , aluno: 'Antal S Varga'
    });
});
*/

// Para acessar todos os parâmetros (request)
// url insomnia = http://localhost:3333/users?name=Antal&idade=52
/*
app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0'
        , status: 'QUARENTENA'
        , aluno: 'Antal S Varga'
    });
});
*/

// Para acessar o route
// na url no insomnia http://localhost:3333/users/1
/*
app.get('/users/:id', (request, response ) => {
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack'
        , aluno: 'Antal'
    });
});
*/

// Para criar 
// Request Body: Corpo da requisicao utilizado para criar ou alt recursos
// Alterar no insomnia de GET para POST
// Na url http://localhost:3333/users
// Selecionar no Body o formato JSon 
// *** vide 1
app.use(express.json());

app.post('/users', (request, response) => {
    const body = request.body;

    // o result será um "undefined" pq precisamos informar ao app que 
    // estaremos usando um json para as requisições *** vide 1
    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0'
        , aluno: 'Eu S Varga'
    });
});



// ***
// mandar a aplicação ouvir a porta 3333
// Recomendado rodar o node na porta 3333
// React na porta 3000
app.listen(3333);

// Para executar abra o terminal e digite
// node index.js
