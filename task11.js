'use strict'

function outerFunction(outerVariable) {

   // Определение внутренней функции innerFunction с одним параметром innerVariable
   function innerFunction(innerVariable) {
      // Возвращение строки, объединяющей значения outerVariable и innerVariable
      return `outerFunction: ${outerVariable}, innerFunction: ${innerVariable}`;
   }

   // Возврат ссылки на внутреннюю функцию innerFunction
   return innerFunction;
}

// Вызов outerFunction с аргументом 'closure' и сохранение возвращаемой функции в переменной closure
const closure = outerFunction('closure');

console.log(closure('example'));
