/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipeId");
      table.string("recipeName", 64).unique().notNullable();
      table.timestamps({ useCamelCase: true });
    })
    .createTable("steps", (table) => {
      table.increments();
      table.string("stepDirections", 128).notNullable();
      table.integer("stepNumber").notNullable();
      table
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("recipeId")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredientId");
      table.string("ingredientName", 64).notNullable();
    })
    .createTable("step_ingredient", (table) => {
      table
        .integer("stepId")
        .unsigned()
        .notNullable()
        .references("stepId")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredientId")
        .unsigned()
        .references("ingredientId")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.primary(["stepId", "ingredientId"]);
      table.integer("quantity").unsigned().notNullable;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
