/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds === 0) {
        return "just now";
    } else if (seconds < 60) {
        return seconds + " seconds ago";
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return minutes + " minute" + (minutes === 1 ? "" : "s") + " ago";
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return hours + " hour" + (hours === 1 ? "" : "s") + " ago";
    } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return days + " day" + (days === 1 ? "" : "s") + " ago";
    } else if (seconds < 2419200) {
        const weeks = Math.floor(seconds / 604800);
        return weeks + " week" + (weeks === 1 ? "" : "s") + " ago";
    } else {
        return "undefined";
    }
}

console.log(timeago(0));
console.log(timeago(10));
console.log(timeago(60));
console.log(timeago(3600));
console.log(timeago(90000));
console.log(timeago(2419200));

module.exports = timeago;
