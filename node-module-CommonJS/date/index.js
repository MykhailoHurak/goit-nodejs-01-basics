// робимо загальний імпорт та експорт в одному файлі index.js
// це правило хорошого тону

const getCurrentMonth = require('./getCurrentMonth');
const isLeapYear = require('./isLeapYear');

module.exports = {
    getCurrentMonth,
    isLeapYear,
}