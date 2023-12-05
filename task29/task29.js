'use strict'

function formValues(event) {
   // Получаем значения из полей формы по их идентификаторам
   const name = document.getElementById('name').value;
   const surname = document.getElementById('surname').value;
   const email = document.getElementById('email').value;

   // Создаем строку сообщения, содержащую полученные данные
   const message = `Данные получены!\n\nИмя: ${name}\nФамилия: ${surname}\nПочта: ${email}`;

   // Выводим сообщение с данными в модальном окне
   alert(message);

   // Очищаем значения полей формы
   name = '';
   surname = '';
   email = '';

   // Отменяем стандартное поведение события 
   event.preventDefault();
}

// Получаем кнопку формы по её идентификатору
const formBtn = document.getElementById('btn');

// Добавляем слушатель события click на кнопку, который вызывает функцию formValues
formBtn.addEventListener('click', formValues)

