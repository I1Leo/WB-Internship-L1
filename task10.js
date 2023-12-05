'use strict'

const json = `{"name": "Иван", "age": 22, "city": "Москва", "married": false, "interests": ["программирование", "чтение", "видеоигры"], "obj" : {"key1": "v1", "key2": 2, "key3": false, "key4": [1, "value4", false]}}`;

function customParse(jsonString) {
   // Удаляем все пробелы из JSON-строки
   jsonString = jsonString.replace(/\s/g, '');

   // Проверяем, что JSON-строка соответствует паттерну
   if (/^[\],:{}\s]*$/.test(jsonString.replace(/\\["\\\/bfnrtu]/g, '@').
      replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
      replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

      // Убираем двойные кавычки в ключах на двоеточие
      jsonString = jsonString.replace(/"([^"]+)":/g, '$1:');

      // Используем new Function для выполнения кода и возвращаем результат
      return (new Function('return ' + jsonString))();
   } else {
      // В случае неверного формата выбрасываем исключение SyntaxError
      throw new SyntaxError('Invalid JSON string');
   }
}
