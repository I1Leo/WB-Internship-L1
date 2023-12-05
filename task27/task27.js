'use strict'

// Функция addAnimation принимает следующие параметры:
// - element: элемент, к которому будет добавлена анимация
// - action: значение свойства, которое будет анимировано 
// - property: свойство CSS, которое будет анимировано 
// - duration: продолжительность анимации в секундах 
// - timing: функция времени для анимации 
// - delay: задержка перед началом анимации 
function addAnimation(element, action, property, duration, timing, delay) {
   // Устанавливаем свойство transition элемента, чтобы определить параметры анимации
   element.style.transition = `${property} ${duration} ${timing} ${delay}`;

   // Устанавливаем значение свойства, которое будет анимировано
   element.style[property] = action;

   // Возвращаем элемент с добавленной анимацией
   return element;
}

// Пример
const element = document.getElementById('element');

addAnimation(element, `${document.documentElement.clientWidth / 2}px`, 'translate', '5s', 'ease', '');
