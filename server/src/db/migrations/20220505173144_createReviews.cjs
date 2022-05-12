/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reviews", (table) => {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.text("body").notNullable()
    table.integer("rating").notNullable()
    table.bigInteger("holidayId").unsigned().index().notNullable().references("holidays.id")
    table.bigInteger("userId").unsigned().index().notNullable().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("reviews")
}
