/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ingredients").truncate();
  await knex("steps").truncate();
  await knex("step_ingredients").truncate();
  await knex("recipes").truncate();

  // Inserts seed entries
  await knex("recipes").insert([{ recipe_name: "Köri Soslu Tavuk" }]);

  await knex("ingredients").insert([
    {
      ingredient_name: "Tavuk göğsü",
      ingredient_unit: "adet",
    },
    {
      ingredient_name: "Sarımsak",
      ingredient_unit: "diş",
    },
    {
      ingredient_name: "Zeytinyağı",
      ingredient_unit: "yemek kaşığı",
    },
    {
      ingredient_name: "Tuz",
      ingredient_unit: "çay kaşığı",
    },
    {
      ingredient_name: "Karabiber",
      ingredient_unit: "çay kaşığı",
    },
    {
      ingredient_name: "Soğan",
      ingredient_unit: "adet",
    },
    {
      ingredient_name: "Domates",
      ingredient_unit: "adet",
    },
    {
      ingredient_name: "Köri tozu",
      ingredient_unit: "çay kaşığı",
    },
    {
      ingredient_name: "Süt",
      ingredient_unit: "su bardağı",
    },
  ]);

  await knex("steps").insert([
    {
      step_order: 1,
      step_text: "Tavuk göğsünü yıkayıp doğrayın.",
      recipe_id: 1,
    },
    {
      step_order: 2,
      step_text: "Bir tavada zeytinyağı, sarımsak ve soğanı kavurun.",
      recipe_id: 1,
    },
    {
      step_order: 3,
      step_text: "Tavukları ekleyin ve pişirin.",
      recipe_id: 1,
    },
    {
      step_order: 4,
      step_text: "Domatesleri doğrayın ve tavaya ekleyin.",
      recipe_id: 1,
    },
    {
      step_order: 5,
      step_text: "Köri tozunu ekleyin ve karıştırın.",
      recipe_id: 1,
    },
    {
      step_order: 6,
      step_text: "Sütü ekleyin ve karıştırarak pişirin.",
      recipe_id: 1,
    },
  ]);

  await knex("step_ingredients").insert([
    {
      step_id: 1,
      ingredient_id: 1,
      quantity: 2,
    },
    {
      step_id: 2,
      ingredient_id: 2,
      quantity: 2,
    },
    {
      step_id: 2,
      ingredient_id: 6,
      quantity: 1,
    },
    {
      step_id: 3,
      ingredient_id: 3,
      quantity: 2,
    },
    {
      step_id: 4,
      ingredient_id: 7,
      quantity: 1,
    },
    {
      step_id: 4,
      ingredient_id: 3,
      quantity: 1,
    },
    {
      step_id: 5,
      ingredient_id: 8,
      quantity: 1,
    },
    {
      step_id: 6,
      ingredient_id: 9,
      quantity: 1,
    },
  ]);
};
