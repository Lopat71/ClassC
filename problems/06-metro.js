/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    const totalStations = 13;
    if (x === y) {
        return 0;
    }
    const directPath = Math.abs(x - y) - 1;
    const reversePath = totalStations - Math.abs(x - y) - 1;
    return Math.min(directPath, reversePath);
}

console.log(metro(1, 2));
console.log(metro(1, 3));
console.log(metro(13, 1));
console.log(metro(1, 13));

module.exports = metro;
