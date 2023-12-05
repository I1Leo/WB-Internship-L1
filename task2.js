'use strict'

const number = 28;

function isStrangeNumber(number) {

   // Создается пустой массив, в который будем добавлять делители числа
   const dividersArr = [];

   // Используется цикл for для нахождения делителей числа
   // Цикл начинается с 1, так как 0 вызовет ошибку деления на ноль
   for (let i = 1; i < number; i++) {
      // Проверяется, является ли i делителем числа
      if (number % i === 0) {
         // Если да, i добавляется в массив dividersArr
         dividersArr.push(i);
      }
   }

   // Используется метод reduce для нахождения суммы делителей
   const sumOfDividers = dividersArr.reduce((sum, item) => sum + item, 0);

   // Проверяется, является ли сумма делителей числа равной самому числу
   if (sumOfDividers === number) {
      // Если да, возвращается true
      return true;
   }

   // В противном случае возвращается false
   return false;
}
