const knex = require("knex");
const environment = process.env.NODE_ENV;
const config = require("../knexfile");

module.exports = knex(config[environment]);
