exports.up = function (knex) {
  return knex.schema.createTable("animals", table => {
    table.increments();
    table.string("animal_name", 128).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("animals");
};
