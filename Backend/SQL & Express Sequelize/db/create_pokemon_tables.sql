    CREATE DATABASE poke_data DEFAULT CHARACTER SET = 'utf8mb4';
    use poke_data


    CREATE TABLE pokemon(
        pokemon_id INT PRIMARY KEY AUTO_INCREMENT,
        pokemon_name VARCHAR(20),
        pokemon_type_id INT,
        pokemon_height INT,
        pokemon_weight INT,
        FOREIGN KEY (pokemon_type_id) REFERENCES pokemon_type(pokemon_type_id)
    );

    CREATE TABLE trainer(
        trainer_id INT PRIMARY KEY AUTO_INCREMENT,
        trainer_name VARCHAR(20),
        trainer_town INT,
        FOREIGN KEY (trainer_town) REFERENCES town(town_id)
    )

    CreATE TaBLE pokemon_type(
        pokemon_type_id INT PRIMARY KEY AUTO_INCREMENT,
        pokemon_type VARCHAR(20)
    );


    CREATE TABLE town(
        town_id INT PRIMARY KEY AUTO_INCREMENT,
        town_name VARCHAR(20)
    )

    CREATE TABLE pokemon_trainer(
        id INT PRIMARY KEY AUTO_INCREMENT,
        pokemon_id INT,
        trainer_id INT,
        FOREIGN KEY (pokemon_id) REFERENCES pokemon(pokemon_id),
        FOREIGN KEY (trainer_id) REFERENCES trainer(trainer_id) 
    )

