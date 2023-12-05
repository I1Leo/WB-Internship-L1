'use strict'

function passwordComplexity(password) {
   // Проверка на длину пароля
   const passwordLength = password.length;
   let score = 0;

   // Добавление баллов за различные критерии
   score += (passwordLength >= 8) ? 2 : 0; // Минимальная длина
   score += (passwordLength >= 12) ? 2 : 0; // Дополнительные баллы за большую длину
   score += (/[a-z]/.test(password)) ? 2 : 0; // Наличие строчных букв
   score += (/[A-Z]/.test(password)) ? 2 : 0; // Наличие прописных букв
   score += (/\d/.test(password)) ? 2 : 0; // Наличие цифр
   score += (/[^a-zA-Z\d]/.test(password)) ? 2 : 0; // Наличие спецсимволов

   // Оценка уровня сложности
   if (score < 4) {
      return "Слабый пароль. Рекомендуется использовать более длинный пароль с различными типами символов.";
   } else if (score < 8) {
      return "Средний пароль. Рекомендуется добавить разнообразие в использование символов и увеличить длину.";
   } else {
      return "Сильный пароль. Хорошая работа!";
   }
}

// Пример использования функции
const passwordInput = document.getElementById('password');
const score = document.querySelector('.form__score');

passwordInput.addEventListener('input', renderScore);

function renderScore() {
   score.textContent = passwordComplexity(passwordInput.value);
   if (passwordInput.value.length === 0) {
      score.classList.add('hidden');
   } else {
      score.classList.remove('hidden');
   }
}
