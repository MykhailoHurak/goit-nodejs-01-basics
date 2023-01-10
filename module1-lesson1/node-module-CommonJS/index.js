const users = require("./users");
// console.log(users);

const {girls} = require("./users");
// console.log(girls);

// варіант 1
// експортуємо функцію getCurrentMonth із папки ./date та використовуємо
const { getCurrentMonth } = require('./date');
const currentMonth = getCurrentMonth();
console.log(currentMonth);

// варіант 2
// можна через імпорт інструмент одразу виконати
const currentMonth1 = require('./date').getCurrentMonth();
console.log(currentMonth1);