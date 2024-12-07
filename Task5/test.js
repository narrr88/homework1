const { formatDate, isWeekend, daysBetween } = require('./dateUtils.js');

const date1 = new Date('2023-12-25');
const date2 = new Date('2023-12-24');
const date3 = new Date('2023-12-26');

console.log('formatDate');
try {
    console.log(formatDate(date1, 'YYYY-MM-DD') === '2023-12-25');
    console.log(formatDate(date1, 'MM/DD/YYYY') === '12/25/2023');
    console.log(formatDate(date1, 'DD-MM-YYYY') === '25-12-2023');
    console.log(formatDate(date1, 'HH:mm:ss') === '00:00:00');
} catch (error) {
    console.error('formatDate failed:', error.message);
}

console.log('isWeekend');
try {
    console.log(isWeekend(date1) === false);
    console.log(isWeekend(date2) === true);
    console.log(isWeekend(date3) === false);
} catch (error) {
    console.error('isWeekend failed:', error.message);
}

console.log('daysBetween');
try {
    console.log(daysBetween(date1, date2) === 1);
    console.log(daysBetween(date1, date3) === 1);
    console.log(daysBetween(date2, date3) === 2);
} catch (error) {
    console.error('daysBetween test failed:', error.message);
}