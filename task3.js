'use strict'

function MathX(number) {

   function isPrime(number) {
      // Если число меньше или равно 1, то оно не является простым
      if (number <= 1) return false;
      // Используется цикл for для проверки делителей числа
      for (let i = 2; i <= Math.sqrt(number); i++) {
         // Если число делится нацело на текущий делитель (i), то оно не является простым
         if (number % i === 0) return false;
      }
      //  Если число не делится нацело на ни один делитель в указанном диапазоне, то оно простое
      return true;
   }

   return {
      nFibNumber() {
         // Инициализация первого числа Фибоначчи.
         let a = 0;
         // Инициализация второго числа Фибоначчи
         let b = 1;
         // Временная переменная для хранения суммы a и b  
         let temp;

         // Цикл, начинающийся с i=2, так как первые два числа Фибоначчи уже заданы
         for (let i = 2; i <= number; i++) {
            // Вычисление следующего числа Фибоначчи как суммы двух предыдущих
            temp = a + b;
            // Обновление значения a до значения b
            a = b;
            // Обновление значения b до значения temp (суммы предыдущих двух чисел)     
            b = temp;
         }
         // Возврат n-ного числа Фибоначчи .
         return b;
      },
      fibSequence() {
         // Инициализируется массив с первыми двумя числами последовательности Фибоначчи
         let sequence = [0, 1];

         // Цикл, который начинается с третьего числа (индекс 2) и продолжается до указанного числа (number)
         for (let i = 2; i <= number; i++) {
            // Вычисление следующего числа Фибоначчи и добавление его в массив
            sequence.push(sequence[i - 1] + sequence[i - 2]);
         }

         // Преобразование массива в строку и возврат полученной последовательности
         return sequence.join(', ');
      },
      nPrimeNumber() {
         // Если n равно 1, возвращается 2 (первое простое число)
         if (number === 1) return 2;

         // Инициализируется текущее простое число (начинаем с 3, так как 2 уже учтено выше)
         let simpleNumber = 3;
         //  Инициализируется счетчик простых чисел, начинаем с 1, так как первое простое число уже учтено
         let counter = 1;

         // Запускается цикл, пока не достигнем n-ного простого числа
         while (counter < number) {
            // Если текущее число simpleNumber простое, счетчик увеличивается
            if (isPrime(simpleNumber)) {
               counter++;
               // Если достигли n-ного простого числа, возвращаем его
               if (counter === number) return simpleNumber;
            }

            // simpleNumber увеличивается на 2, так как четные числа (кроме 2) не могут быть простыми
            simpleNumber += 2;
         }

         // Возвращаем n-ное простое число
         return simpleNumber;
      },
      primeSequence() {
         // Если запрашивается первая простая последовательность, то возвращается 2
         if (number === 1) return 2;

         // Инициализируется массив последовательности простых чисел с первым элементом 1
         let sequence = [1];

         // Инициализируется счетчик простых чисел в последовательности
         let counter = 1;

         // Инициализируется первое простое число в последовательности после 2
         let simpleNumber = 3;

         // Запускается цикл до достижения заданного количества простых чисел
         while (counter < number) {
            // Проверяется, является ли текущее число простым
            if (isPrime(simpleNumber)) {
               // Если число простое, оно добавляется в последовательность
               sequence.push(simpleNumber);
               // Увеличивается счетчик простых чисел
               counter++;
               // Если достигли n-ного простого числа, то возвращается полученная последовательность
               if (counter === number) return sequence.join(', ');
            }

            // simpleNumber увеличивается на 2, так как четные числа (кроме 2) не могут быть простыми
            simpleNumber += 2;
         }
      }
   }
}

