require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');
//Servir contenido estatico 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Eliezer Rincon',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre:'Eliezer Rincon',
        titulo: 'Curso Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre:'Eliezer Rincon',
        titulo: 'Curso Node'
    });
});

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html');
});

app.get('/home', (req, res) => { 
    res.sendFile( __dirname + '/public/home.html');
});


app.get('/hola-mundo', (req, res) => {
    res.send('Hello World 2');
});

app.get('/*', (req, res) => {
    res.send('Page Not Found');
});

app.listen(port, () => {
    console.log('Example app at ', port)
});
