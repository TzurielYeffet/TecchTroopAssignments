const { Sequelize, DataTypes } = require("sequelize");
const db = require("../poke_data.json");

const sequelize = new Sequelize("poke_data", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

const PokemonType = sequelize.define(
  "pokemon_type",
  {
    pokemon_type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_type: {
      type: DataTypes.STRING,
      unique: true,
      field: "pokemon_type",
    },
  },
  { freezeTableName: true }
);

const Town = sequelize.define(
  "town",
  {
    town_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    town_name: { type: DataTypes.STRING, unique: true },
  },
  { freezeTableName: true }
);

const Trainer = sequelize.define(
  "trainer",
  {
    trainer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    trainer_name: { type: DataTypes.STRING },
    trainer_town: { type: DataTypes.INTEGER },
  },
  { freezeTableName: true }
);
Trainer.belongsTo(Town, { foreignKey: "trainer_town" });

const Pokemon = sequelize.define(
  "pokemon",
  {
    pokemon_id: { type: DataTypes.INTEGER, primaryKey: true },
    pokemon_type_id: { type: DataTypes.INTEGER },
    pokemon_name: { type: DataTypes.STRING, unique: true },
    pokemon_height: { type: DataTypes.INTEGER },
    pokemon_weight: { type: DataTypes.INTEGER },
  },
  { freezeTableName: true }
);
Pokemon.belongsTo(PokemonType, { foreignKey: "pokemon_type_id" });

Pokemon.belongsToMany(
  Trainer,
  {
    through: "pokemon_trainer",
    foreignKey: "pokemon_id",
    otherKey: "trainer_id",
  },
  { freezeTableName: true }
);
Trainer.belongsToMany(
  Pokemon,
  {
    through: "pokemon_trainer",
    foreignKey: "trainer_id",
    otherKey: "pokemon_id",
  },
  { freezeTableName: true }
);

module.exports = { sequelize, Pokemon, PokemonType, Trainer, Town };
