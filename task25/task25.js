'use strict'

function createElement(tagName, text, styleName, styleValue) {
   // Создаем новый HTML-элемент с заданным тегом
   const element = document.createElement(tagName);

   // Устанавливаем текстовое содержимое элемента
   element.textContent = text;

   // Применяем стили к элементу
   element.style[styleName] = styleValue;

   // Добавляем созданный элемент в конец тела документа
   return document.body.appendChild(element);
}


// Пример использования:
createElement('p', 'Текст нового элемента', 'color', 'blue');
createElement('p', 'Текст нового элемента', 'fontSize', '20px');
createElement('input', 'Текст нового элемента', 'border', '2px dashed green');

