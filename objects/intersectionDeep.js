/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    const result = {};

    for (const key in firstObject) {
        if (key in secondObject) {
            const firstValue = firstObject[key];
            const secondValue = secondObject[key];

            if (
                typeof firstValue === "object" &&
                firstValue !== null &&
                typeof secondValue === "object" &&
                secondValue !== null
            ) {
                const nestedIntersection = intersectionDeep(
                    firstValue,
                    secondValue
                );

                if (Object.keys(nestedIntersection).length > 0) {
                    result[key] = nestedIntersection;
                }
            } else if (firstValue === secondValue) {
                result[key] = firstValue;
            }
        }
    }

    return result;
};

const data = { a: 1, b: { c: 3, d: 4 }, e: 5 };
const data2 = { c: 1, b: { c: 3, f: 6 }, e: 7 };

console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
