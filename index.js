const express = require('express');
const { v4:uuidv4 } = require('uuid');


const app = express();

app.use(express.json()); //para poder receber json


const projects = [];

app.get('/projects', (request, response) =>{
    //const {title, owner}= request.query;

    //console.log(title);
    //console.log(owner);
    
    return response.json(projects);
});

app.post('/projects', (request, response) =>{
    const {title, owner}= request.body;

    const project = {id: uuidv4(), title, owner};
    projects.push(project); //esse push vai jogar a criação do projeto para o array

    //console.log(title);
    //console.log(owner);

    return response.json(project); //sempre retornar o obejeto recém criado e nunca exibir a lista completa;
});


app.put('/projects/:id', (request, response) =>{
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ])
});

app.delete('/projects/:id', (request, response) =>{
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ])
});

app.listen(3000, () => {
    console.log(` http://localhost:3000/projects `)
  
});
  