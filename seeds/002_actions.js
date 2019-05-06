
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'Create the Front End',
          complete: true,
          project_id: 1
        },
        {
          description: 'Create the Back End',
          complete: true,
          project_id: 1
        },
        {
          description: 'Deploy the product',
          complete: true,
          project_id: 1
        },
        {
          description: 'Create the Front End',
          complete: true,
          project_id: 2
        },
        {
          description: 'Create the Back End',
          complete: false,
          project_id: 2
        },
        {
          description: 'Deploy the product',
          complete: false,
          project_id: 2
        },
        {
          description: 'Create the Front End',
          complete: false,
          project_id: 3
        },
        {
          description: 'Create the Back End',
          complete: false,
          project_id: 3
        },
        {
          description: 'Deploy the product',
          complete: false,
          project_id: 3
        },
      ]);
    });
};
