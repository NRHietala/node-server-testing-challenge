const db = require("../../data/dbConfig");

function getAll() {
  return db("animals");
}

function getById(id) {
  return db("animals").where({ id }).first();
}

async function create(quote) {
  const [id] = await db("animals").insert(quote);
  return getById(id);
}

function remove(id) {
  return db("animals").where({ id }).del();
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
