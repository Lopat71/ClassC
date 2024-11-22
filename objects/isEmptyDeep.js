/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

export const isEmptyDeep = (object) => {
    if (object && typeof object === "object") {
        for (const key in object) {
            if (Object.hasOwn(object, key)) {
                const value = object[key];

                if (!isEmptyDeep(value)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return (
            object === "" ||
            object === null ||
            object === undefined ||
            Number.isNaN(object) ||
            (Array.isArray(object) && object.length === 0) ||
            (typeof object === "object" && Object.keys(object).length === 0)
        );
    }
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
const data3 = { a: { b: [] } };
const data4 = { a: { b: { c: {} } } };

console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
console.log(isEmptyDeep(data3)); // true
console.log(isEmptyDeep(data4)); // true
