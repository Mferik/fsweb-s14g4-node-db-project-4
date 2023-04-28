const knex = require("knex");
const config = require("../knexfile");
const environment = process.env.NODE_ENV || "development";

const db = knex(config[environment]);

module.export = db;