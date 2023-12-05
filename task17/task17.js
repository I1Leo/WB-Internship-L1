'use strict'

// Получаем ссылку на элемент с идентификатором 'addressInput'
const addressInput = document.getElementById('addressInput');

// Получаем первый элемент с классом 'adress__select'
const select = document.querySelector('.adress__select');

// Получаем все элементы с классом 'adress__item'
let adressItems = document.querySelectorAll('.adress__item');

// Функция debounce для отложенного выполнения другой функции
function debounce(func, delay) {
   // Идентификатор таймаута для управления задержкой выполнения
   let timeoutId;

   // Возвращаем функцию-обертку, которая будет использована вместо оригинальной функции
   return function () {
      // Сохраняем текущий контекст и аргументы функции
      const context = this;
      const args = arguments;

      // Очищаем предыдущий таймаут, чтобы избежать множественных вызовов функции
      clearTimeout(timeoutId);

      // Устанавливаем новый таймаут для выполнения функции через заданную задержку
      timeoutId = setTimeout(() => {
         func.apply(context, args);
      }, delay);
   };
}

// Функция throttle для ограничения частоты выполнения другой функции
function throttle(func, limit) {
   // Флаг, определяющий, выполняется ли функция в данный момент
   let inThrottle;

   // Возвращаем функцию-обертку, которая будет использована вместо оригинальной функции
   return function () {
      // Сохраняем текущий контекст и аргументы функции
      const context = this;
      const args = arguments;

      // Проверяем, выполняется ли функция в данный момент
      if (!inThrottle) {
         // Вызываем переданную функцию с текущим контекстом и аргументами
         func.apply(context, args);

         // Устанавливаем флаг в true, чтобы предотвратить следующий вызов в ближайшее время
         inThrottle = true;

         // Устанавливаем таймаут для сброса флага
         setTimeout(() => (inThrottle = false), limit);
      }
   };
}

// Функция для геокодирования адреса
function geocodeAddress(address) {
   // Создаем новое множество для хранения уникальных результатов геокодирования
   const set = new Set();

   // Выполняем геокодирование с использованием API Yandex Maps
   ymaps.geocode(address).then(result => {
      // Получаем объекты гео-объектов из результата геокодирования
      let geoObj = result.geoObjects;

      // Если первый гео-объект не найден, добавляем сообщение "Не найдено" в множество
      if (!geoObj.get(0)) {
         set.add('Не найдено');
      } else {
         // Для каждого гео-объекта добавляем его адресную строку в множество
         geoObj.each(item => set.add(item.getAddressLine()));
      }

      // Вызываем функцию renderOption для отображения результатов в интерфейсе
      renderOption(set);
   });
}

// Функция для отображения вариантов адресов
function renderOption(set) {
   // Обновляем ссылку на элементы с классом 'adress__item'
   adressItems = document.querySelectorAll('.adress__item');

   // Удаляем все элементы с классом 'adress__item', если они существуют
   if (adressItems) {
      adressItems.forEach(item => item.remove());
   }

   // Вставляем новые элементы в список с классом 'adress__select'
   set.forEach(item => select.insertAdjacentHTML('afterbegin', `<li class='adress__item'>${item}</li>`));

   // Обновляем ссылку на элементы с классом 'adress__item'
   adressItems = document.querySelectorAll('.adress__item');
}

// Функция-обработчик для задержки выполнения геокодирования при вводе адреса
const handleInput = debounce(function () {
   // Получаем текущее значение ввода адреса
   const address = addressInput.value;

   // Проверяем, если введенный адрес пуст, скрываем список вариантов
   if (address.length === 0) {
      select.style.display = 'none';
   } else {
      // Если введенный адрес не пуст, отображаем список вариантов и запускаем геокодирование
      select.style.display = 'flex';
      geocodeAddress(address);
   }
}, 1000);

// Назначаем обработчик ввода на элемент 'addressInput'
addressInput.addEventListener('input', throttle(handleInput, 1000));

// Обработчик клика для выбора адреса из списка
select.addEventListener('click', function (event) {
   const target = event.target;

   // Если кликнутый элемент имеет класс 'adress__item'
   if (target.classList.contains('adress__item')) {
      // Устанавливаем значение 'addressInput' равным тексту элемента
      addressInput.value = target.textContent;
      // Удаляем все элементы списка
      adressItems.forEach(item => item.remove());
      // Скрываем список
      select.style.display = 'none';
   }
});


