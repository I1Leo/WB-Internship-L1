// Объявление переменной для отслеживания глубины стека вызовов
let callStackDepth = 0;

function recursiveFunction() {
  // Увеличиваем счетчик глубины стека вызовов на каждом вызове функции
  callStackDepth++;

  // Рекурсивный вызов функции (вызываем саму себя)
  recursiveFunction();
}

// Попытка выполнить рекурсивную функцию
try {
  // Исходный вызов рекурсивной функции, который запустит цепочку рекурсивных вызовов
  recursiveFunction();
} catch (error) {
  // Перехватываем ошибку, которая произойдет при достижении максимальной глубины стека вызовов
  // Выводим сообщение о достигнутой глубине стека вызовов
  console.log("Maximum call stack depth reached:", callStackDepth);
}

// Полученные результаты:
// Yandex Browser: 13940;
// Google Chrome: 12551;
// Opera: 12551;
// Firefox: 32739;