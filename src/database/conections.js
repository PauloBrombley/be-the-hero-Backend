const knek = require('knex');
const configurations = require('../../knexfile');

const connection = knek(configurations.development);

module.exports = connection;