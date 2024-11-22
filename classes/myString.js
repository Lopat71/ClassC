/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        if (!str) return "";
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str
            .split(" ")
            .map((word) => this.ucFirst(word))
            .join(" ");
    }
}

const str = new MyString();

console.log(str.reverse("abcde")); // 'edcba'
console.log(str.ucFirst("abcde")); // 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); // 'Abcde Abcde Abcde'

module.exports = MyString;
