'use strict'

async function asyncFunc() {

   // Определение функции func, которая возвращает Promise
   let func = (i) => {
      return new Promise(resolve => {
         // Имитация асинхронной операции с задержкой в 500 миллисекунд
         setTimeout(() => resolve(`Результат функции ${i}`), 500);
      });
   }

   // Выполнение асинхронной операции с использованием await и сохранение результата в переменной result1
   const result1 = await func(1)

   // Выполнение второй асинхронной операции и сохранение результата в переменной result2
   const result2 = await func(2)

   // Выполнение третьей асинхронной операции и сохранение результата в переменной result3
   const result3 = await func(3)

   // Возврат массива, содержащего результаты всех трех асинхронных операций
   return [result1, result2, result3]
}

// Вызов асинхронной функции и ожидание завершения ее выполнения с помощью метода then
asyncFunc().then(result => console.log(result))
