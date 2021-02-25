exports.seed = function (knex) {
  return knex("animals")
    .truncate()
    .then(function () {
      return knex("animals").insert([
        { id: 1, animal_name: "Henry" },
        { id: 2, animal_name: "George" },
        { id: 3, animal_name: "Peter" },
      ]);
    });
};
