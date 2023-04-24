
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config - Template Engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Rotas

app.get('/home', function (req, res) {
  res.render('home')
});

app.get('/cad', (req, res) => {
  res.render('formulario')
});

app.post('/add', (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/home')
  }).catch(function (erro) {
    res.send('Houve um erro: ' + erro)
  })
});


app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});