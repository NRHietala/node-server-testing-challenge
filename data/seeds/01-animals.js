exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("animals")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("animals").insert([
        { id: 1, animal_name: "Henry" },
        { id: 2, animal_name: "George" },
        { id: 3, animal_name: "Peter" },
      ]);
    });
};
