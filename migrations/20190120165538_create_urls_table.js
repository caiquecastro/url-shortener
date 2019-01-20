exports.up = function(knex) {
  return knex.schema.createTable("urls", t => {
    t.increments();
    t.string("original");
    t.string("shortened").unique();
    t.timestamp("date");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("urls");
};
