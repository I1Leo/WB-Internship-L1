'use strict'

const arr = [() => console.log(1 + 1), () => console.log(6 - 2), () => console.log(3 * 2)];

function funcCall(arr) {
   // Используется метод forEach для итерации по каждому элементу массива
   arr.forEach((func) => {
      // Вызывается текущей функции из массива
      func();
   });

   // Возврат строки, указывающей, что все функции вызваны
   return 'Все функции вызваны';
}


