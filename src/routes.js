const express = require('express');
const OngController = require('./controllers/OngController');
const InsidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', InsidentController.index);
routes.post('/incidents', InsidentController.create);
routes.delete('/incidents/:id', InsidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;