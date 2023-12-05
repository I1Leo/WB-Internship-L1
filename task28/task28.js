'use strict'

function createTemplate(inner) {
   // Создаем элемент <template>
   const template = document.createElement('template');

   // Задаем содержимое шаблона
   template.innerHTML = inner;

   // Получаем содержимое шаблона
   const templateContent = template.content;

   // Клонируем содержимое шаблона
   const clone = document.importNode(templateContent, true);

   // Добавляем клон в DOM (например, в тело документа)
   document.body.appendChild(clone);

}

// Пример
const elementInner = `<div>
   <p>Text element</p>
   <style>
      h1 {
         font-style: italic;
      }
   </style>
   <h1>Header element</h1>
</div>`

createTemplate(elementInner);
