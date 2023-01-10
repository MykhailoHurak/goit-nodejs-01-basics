const fs = require("fs/promises");
const { nanoid } = require("nanoid")

// абсолютний шлях до папки з файлом
const path = require("path"); // імпортуємо
const playersPath = path.join(__dirname, "players.json");
// const playersPath = `${__dirname}/players.json`;

const getAll = async () => {
    const data = await fs.readFile(playersPath);

    return JSON.parse(data);
};

const getById = async (id) => {
    const allPlayers = await getAll();
    const onePlayer = allPlayers.find(item => item.id === id);

    return onePlayer || null;
}

const add = async ({ name, country }) => {
    const allPlayers = await getAll();
    newPlayer = {
        id: nanoid(),
        name,
        country,
    }

    allPlayers.push(newPlayer);
    await fs.writeFile(playersPath, JSON.stringify(allPlayers, null, 2));

    return newPlayer;
}

const update = async (id, data) => {
    const allPlayers = await getAll();
    const index = allPlayers.findIndex(item => item.id === id);
    if (index === -1) {
        return null;
    };
    allPlayers[index] = { id, ...data };
    await fs.writeFile(playersPath, JSON.stringify(allPlayers, null, 2));

    return allPlayers[index];
}

const remove = async (id) => {
    const allPlayers = await getAll();
    const index = allPlayers.findIndex(item => item.id === id);
    if (index === -1) {
        return null;
    };

    const [result] = allPlayers.splice(index, 1);
    await fs.writeFile(playersPath, JSON.stringify(allPlayers, null, 2));
    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove,
}