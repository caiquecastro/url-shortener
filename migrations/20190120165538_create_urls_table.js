exports.up = function(knex) {
  return knex.schema.createTable("urls", t => {
    t.increments();
    t.string("original");
    t.string("shortened").unique();
    t.timestamp("date");
    t.integer("clicks")
      .unsigned()
      .notNull()
      .default(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("urls");
};
