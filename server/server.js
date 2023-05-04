const express = require('express')
const cors = require('cors');
const app = express()
const db = require("./config/database")


//falta crear middleware auth.js para proteger las rutas 

//crear conexion
db.authenticate()
 .then(() => {
  console.info('Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
 })

const userRoutes = require('./route/User.route');
const booksRoutes = require('./route/Book.route');
const externalApiRoutes = require('./route/BookExternalApi.route');
const externalUserApiRoutes = require('./route/UserExternalApi');


app.use(express.static('client'));
//dar permisos a los dominios que los utilicen
app.use(cors());
//Solucion para enviar datos desde el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTER
app.use('/api/user', userRoutes);
app.use('/api/book', booksRoutes);
app.use('/api/externalBook', externalApiRoutes);
app.use('/api/externalUser', externalUserApiRoutes);

app.listen(4000);
console.log('Server started on port 4000');