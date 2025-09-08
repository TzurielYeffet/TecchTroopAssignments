const { sequelize, Sequelize } = require("./db/pokemonModles.js");
const {QueryTypes} = require("sequelize")
async function getHaviestPokemon() {
  const [result, metadata] = await sequelize.query(
    "SELECT pokemon_name ,pokemon_weight FROM pokemon  ORDER BY pokemon_weight DESC LIMIT 1"
  );
  return result[0].pokemon_name;
}

async function getByType(type){
    const [result,metadata] = await sequelize.query(
        `SELECT p.pokemon_name
         FROM pokemon p
         JOIN pokemon_type pt ON p.pokemon_type_id = pt.pokemon_type_id
        WHERE pt.pokemon_type = :type`,
        {
            replacements:{type:type},
            //  type: QueryTypes.SELECT     
        }
    )
    const results = result.map(p => p.pokemon_name
    )
    return results
}

async function findOwners(pokemon_name){
    const [result,_] = await sequelize.query(
        `SELECT t.trainer_name
        FROM trainer t JOIN pokemon_trainer pt ON t.trainer_id = pt.trainer_id 
        JOIN pokemon p on pt.pokemon_id = p.pokemon_id 
        WHERE p.pokemon_name = :pokemon_name`,
        {replacements:{pokemon_name: pokemon_name}}
    )
    const results = result.map(res => res.trainer_name)
    console.log(results);
    return results
    
}

async function findRoster(trainer_name){
    const [result,_] = await sequelize.query(
        `SELECT p.pokemon_name FROM pokemon WHERE SELECT trainer_id FROM trainer WHERE trainer_name = :trainer_name JOIN pokemon_trainer pt ON trainer_id = pt.trainer_id WHERE pt.pokemon_id = p.pokemon_id`,{replacements:{trainer_name:trainer_name}} 
    )
    console.log(result)
}

// getHaviestPokemon();
// getByType("grass")
// findOwners("gengar");
findRoster("Loga")