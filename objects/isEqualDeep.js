/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */

export const isEqualDeep = (firstObj, secondObj) => {
    if (
        typeof firstObj !== "object" ||
        typeof secondObj !== "object" ||
        firstObj === null ||
        secondObj === null
    ) {
        return firstObj === secondObj;
    }

    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    for (const key of firstKeys) {
        if (!secondKeys.includes(key)) {
            return false;
        }

        if (!isEqualDeep(firstObj[key], secondObj[key])) {
            return false;
        }
    }

    return true;
};

const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };

console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
