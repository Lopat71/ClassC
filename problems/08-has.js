/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    for (let key of path) {
        if (!object || !object.hasOwnProperty(key)) {
            return false;
        }

        object = object[key];
    }

    return true;
}

console.log(has(["a"], { a: 1 }));
console.log(has(["b"], { a: 1 }));
console.log(has(["o", "a"], { o: { a: 2 } }));
console.log(has(["o", "b"], { o: { a: 2 } }));

module.exports = has;
