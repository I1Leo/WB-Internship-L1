'use strict'

// Подключаем библиотеку moment
const moment = require('moment');

// Функция для форматирования текущей даты в строку
function getCurrentDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Функция для добавления указанного количества дней к дате
function addDaysToDate(date, days) {
    return moment(date).add(days, 'days').format('YYYY-MM-DD HH:mm:ss');
}

// Экспортируем созданные функции
module.exports = {
    getCurrentDate,
    addDaysToDate
};
