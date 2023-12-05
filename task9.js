'use strict'

const json = {
   name: 'Иван',
   age: 22,
   city: "Москва",
   married: false,
   interests: ["программирование", "чтение", "видеоигры"],
   hello() {
      console.log(1)
   }
}

function jsonToString(element) {
   // Проверяется, что переданный аргумент не является объектом и не равен null
   if (typeof element !== 'object' || element === null) {
      // Если element - строка, оборачиваем ее в двойные кавычки и возвращаем
      if (typeof element === 'string') {
         return `"${element}"`;
      } else {
         // В противном случае возвращаем element без изменений
         return element;
      };
   } else {
      // Если element - массив, рекурсивно вызываем jsonToString для каждого элемента
      if (Array.isArray(element)) {
         return `[${element.map(item => jsonToString(item))}]`
      } else {
         // Если element - объект, обрабатываем его ключи и значения
         let stringedJson = '';

         // Получаем массив ключей объекта
         const keys = Object.keys(element);

         // Проходим по каждому ключу
         for (let key of keys) {
            // Пропускаем функции и значения undefined
            if (typeof element[key] === 'function' || element[key] === undefined) continue;
            // Добавляем к строке ключ и его значение, рекурсивно вызывая jsonToString
            stringedJson += `"${key}" : ${jsonToString(element[key])}, `;
         }

         // Убираем последние два символа (запятая и пробел) из строки
         stringedJson = stringedJson.slice(0, -2);

         // Возвращаем сформированный JSON-объект в виде строки
         return `{${stringedJson}}`;
      }
   }
}

