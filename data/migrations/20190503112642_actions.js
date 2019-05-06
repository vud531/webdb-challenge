
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('actions', tbl => {
        tbl.increments()

        tbl.string('description', 255)
        .notNullable()

        tbl.string('notes', 255)

        tbl.boolean('complete')
        .notNullable()

        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
