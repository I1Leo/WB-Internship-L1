'use strict'

// Подключаем модуль для работы с датами, определенный в файле 'dateModule.js'
const dateModule = require('./dateModule');

// Получаем текущую дату, вызывая функцию getCurrentDate из модуля dateModule
const currentDate = dateModule.getCurrentDate();

// Выводим в консоль сообщение с текущей датой.
console.log('Текущая дата:', currentDate);

// Вычисляем дату, которая находится через 7 дней от текущей даты, используя функцию addDaysToDate из модуля dateModule
const futureDate = dateModule.addDaysToDate(currentDate, 7);

// Выводим в консоль сообщение с датой, которая находится через 7 дней от текущей
console.log('Дата через 7 дней:', futureDate);
