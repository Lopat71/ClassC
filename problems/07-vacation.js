/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const parts = date.split(".");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);

    const startDate = new Date(year, month, day);

    startDate.setDate(startDate.getDate() + 14);

    const resultDay = startDate.getDate().toString().padStart(2, "0");
    const resultMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
    const resultYear = startDate.getFullYear();

    return `${resultDay}.${resultMonth}.${resultYear}`;
}

console.log(vacation("01.01.2020"));
console.log(vacation("27.01.2020"));

module.exports = vacation;
