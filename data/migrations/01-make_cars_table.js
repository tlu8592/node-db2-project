exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    
    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 128).notNullable()

    tbl.string('model', 128).notNullable()

    tbl.integer('mileage').unsigned().notNullable()

    tbl.string('title', 128)

    tbl.string('transmission', 128)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  // must undo everything up function did in reverse order
  // last thing did by up function is first thing undone by down function
  return knex.schema.dropTableIfExists('cars')
};
