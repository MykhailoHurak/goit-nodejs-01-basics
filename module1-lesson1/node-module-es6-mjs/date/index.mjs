// робимо загальний імпорт та експорт в одному файлі index.js
// це правило хорошого тону

// const getCurrentMonth = require('./getCurrentMonth');
// const isLeapYear = require('./isLeapYear');
export { default as getCurrentMonth } from "./getCurrentMonth.mjs";
export { default as isLeapYear } from "./isLeapYear.mjs";


module.exports = {
    getCurrentMonth,
    isLeapYear,
}