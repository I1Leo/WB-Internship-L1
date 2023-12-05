'use strict'

let string = 'аргентина манит негра';

function isPalidrom(string) {
   // Удаление пробелов из строки
   string = string.replace(/\s/g, '');

   // Инициализация пустой строки для хранения обратной строки
   let reverseString = '';

   // Цикл для создания обратной строки
   for (let i = string.length - 1; i > -1; i--) {
      reverseString += string[i];
   }

   // Проверка на совпадение исходной и обратной строк
   if (string === reverseString) {
      return true;
   } else {
      return false;
   }
}

function isPalidrom2(string) {
   // Удаление пробелов из строки
   string = string.replace(/\s/g, '');

   // Цикл для сравнения символов с начала и конца строки
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - 1 - i]) return false;
   }

   // Если все символы совпадают, то строка является палиндромом
   return true;
}


