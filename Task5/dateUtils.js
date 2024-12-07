function formatDate(date, format) {
    if (!(date instanceof Date)) {
        throw new Error('Invalid date');
    }
    const map = {
        YYYY: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        DD: String(date.getDate()).padStart(2, '0'),
        HH: String(date.getHours()).padStart(2, '0'),
        mm: String(date.getMinutes()).padStart(2, '0'),
        ss: String(date.getSeconds()).padStart(2, '0'),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
}

function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

module.exports = { formatDate, isWeekend, daysBetween };