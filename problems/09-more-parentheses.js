/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    const stack = [];
    for (let char of value) {
        if (char === "(" || char === "{" || char === "<") {
            stack.push(char);
        } else if (
            (char === ")" && stack[stack.length - 1] === "(") ||
            (char === "}" && stack[stack.length - 1] === "{") ||
            (char === ">" && stack[stack.length - 1] === "<")
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(parentheses("<>"));
console.log(parentheses("<}"));
console.log(parentheses("<({})>"));
console.log(parentheses("<({)}"));

module.exports = parentheses;
