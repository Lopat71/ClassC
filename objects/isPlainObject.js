/**

 * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null
 и т.п.
 * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */

export const isPlainObject = (element) => {
    if (typeof element !== "object" || element === null) {
        return false;
    }

    return Object.prototype.toString.call(element) === "[object Object]";
};

const data = { a: 1 };
console.log(isPlainObject(data)); // true

const data2 = [1, 2, 3];
console.log(isPlainObject(data2)); // false

const data3 = null;
console.log(isPlainObject(data3)); // false

const data4 = new Date();
console.log(isPlainObject(data4)); // false
