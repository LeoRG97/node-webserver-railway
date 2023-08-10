require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// poner handlebars como el view engine predeterminado de la aplicación (en lugar del directorio public)
app.set('view engine', 'hbs');
// registrar parciales de Handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {
  // callback para capturar errores
});

/**
 * Middleware para servir contenido estático
 * Especifica el directorio que contiene los archivos estáticos
 * Sobrescribe la ruta "/" de express
 * */
app.use(express.static('public', { extensions: ['html'] }));

// rutas para las vistas de Habdlebars
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Leonardo',
    titulo: 'Curso de Node',
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Leonardo',
    titulo: 'Curso de Node',
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Leonardo',
    titulo: 'Curso de Node',
  });
})

// definir un endpoint específico
app.get('/hello', (req, res) => {
  res.send('Hello World');
})

// definir un endpoint general (catch-all)
app.get('*', (req, res) => {
  // res.send('404 Page Not Found');
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log('App now listening at port', port)
});