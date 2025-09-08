const fs = require("fs");
const {
  sequelize,
  Pokemon,
  PokemonType,
  Trainer,
  Town,
} = require("./pokemonModles.js");

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Successfuly connected to DB");

    await sequelize.sync({ force: true });

    const rawData = fs.readFileSync("../poke_data.json");
    const pokemons = JSON.parse(rawData);

    for (const p of pokemons) {
      const [type] = await PokemonType.findOrCreate({
        where: { pokemon_type: p.type },
      });

      const [pokemon] = await Pokemon.findOrCreate({
        where: { pokemon_id: p.id },
        defaults: {
          pokemon_name: p.name,
          pokemon_height: p.height,
          pokemon_weight: p.weight,
          pokemon_type_id: type.pokemon_type_id,
        },
      });
      if (p.ownedBy && p.ownedBy.length > 0) {
        for (const owner of p.ownedBy) {
          const [town] = await Town.findOrCreate({
            where: { town_name: owner.town },
          });

          const [trainer] =await Trainer.findOrCreate({
            where: { trainer_name: owner.name },
            defaults: {
              trainer_town: town.town_id,
            },
          });
          await pokemon.addTrainer(trainer);
        }
      }
    }
    console.log("DB seeded successfuly");
  } catch (err) {
    console.error("DB error", err);
  } finally {
    await sequelize.close();
  }
}
seedDatabase()