const boys = ["Mykhailo", "Andrii", "Serhii"];

const girls = ["Liubov", "Vira", "Nadiia"];

const users = {
    boys,
    girls
};

// модуль для екпорта може бути лише 1 в файлі
// це експорт для CommonJS
// module.exports = users;

// це експорт для ES6 mjs
export default users;
