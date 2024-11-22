/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let balance = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            balance++;
        } else if (value[i] === ")") {
            balance--;
        }

        if (balance < 0) {
            return false;
        }
    }

    return balance === 0;
}

console.log(parentheses(""));
console.log(parentheses("()()"));

module.exports = parentheses;
