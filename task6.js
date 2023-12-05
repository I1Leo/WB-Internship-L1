'use strict'

const objArr = [{ name: 'John', age: 26 }, { name: 'Peter', age: 24 }, { name: 'Ivan', age: 22 }, { name: 'Julia', age: 24 }, { name: 'Bob', age: 26 }]

function sortFunc(arr) {
   // Используется метод sort для сортировки массива объектов
   arr = arr.sort((a, b) =>
      // Сравниваются возрасты объектов
      a.age === b.age
         // Если возрасты равны, объект сортируется по именам в алфавитном порядке
         ? a.name.localeCompare(b.name)
         // Если возрасты разные, объект сортируется по возрасту по возрастанию
         : a.age - b.age
   );

   // Возвращается отсортированный массив
   return arr;
}

