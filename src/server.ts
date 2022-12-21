import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'teste'});
});

app.post('/teste', (request, response) => {
    const {name} = request.body;
    return response.json({message: name});
});

app.listen(3333,  () => console.log('Server is running'));