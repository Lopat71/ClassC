/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

export const isEmpty = (object) => {
    for (const key in object) {
        const value = object[key];

        if (
            value !== "" &&
            value !== null &&
            value !== undefined &&
            !Number.isNaN(value)
        ) {
            return false;
        }
    }
    return true;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
console.log(isEmpty({})); // true
console.log(isEmpty({ a: null, b: "" })); // true
