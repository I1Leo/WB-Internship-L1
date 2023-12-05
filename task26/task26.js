'use strict'

function passingDOM(node) {
   // Текущий узел выводится в консоль
   console.log(node);

   // Рекурсивный обход дочерних узлов
   for (let i = 0; i < node.children.length; i++) {
      passingDOM(node.children[i]);
   }
}

// Пример использования:
const rootElement = document.getElementById('root');
passingDOM(rootElement);

const ulElement = document.getElementById('ul');
passingDOM(ulElement);

const pElement = document.getElementById('p');
passingDOM(pElement);
