'use strict'

const json = {
   "имя": "Иван",
   "возраст": 22,
   "город": "Москва",
   "женат": false,
   "интересы": ["программирование", "чтение", "видеоигры"],
}

function JSONtoLinkedList(json) {

   // Получаем массив ключей из JSON-объекта
   const keys = Object.keys(json);

   // Если JSON-объект не содержит ключей, возвращается null
   if (keys.length === 0) {
      return null;
   }

   // Создается первый элемент связанного списка с первым значением из JSON-объекта
   let head = { value: json[keys[0]], next: null };
   let current = head;

   // Проходим по оставшимся ключам и значениям JSON-объекта
   for (let i = 1; i < keys.length; i++) {
      // Проверяется, что значение не равно undefined или null
      if (json[keys[i]] !== undefined && json[keys[i]] !== null) {
         // Создается новый элемент списка и он присоединяемся к текущему элементу
         current.next = { value: json[keys[i]], next: null };
         // Осуществляется переход к новому элементу в списке
         current = current.next;
      }
   }

   // Возвращается полученный связанный список
   return head;
}





