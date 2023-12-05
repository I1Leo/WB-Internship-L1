'use strict'

function imgPromise(url) {
   // Создаем новый Promise с двумя параметрами: resolve и reject
   return new Promise((resolve, reject) => {
      // Используем функцию fetch для отправки запроса на сервер и получения данных
      fetch(url)
         // Обрабатываем результат запроса в then-блоке
         .then(response => {
            // Проверяем, успешно ли выполнен запрос (статус 200-299)
            if (response.ok) {
               // Если успешно, вызываем resolve с сообщением об успешной загрузке
               resolve(`Загрузка ${url} прошла успешно`);
            } else {
               // Если запрос не успешен, вызываем reject с сообщением об ошибке
               reject('Возникла ошибка');
            }
         })
         // Обрабатываем ошибки при выполнении запроса в блоке catch
         .catch(error => {
            // Вызываем reject с сообщением об ошибке выполнения запроса
            reject('Ошибка при выполнении запроса: ' + error.message);
         });
   });
}

// Задаем URL изображения
const url = 'https://w.forfun.com/fetch/45/45b2902576046352f3ef12ba952bbf67.jpeg';

// Вызываем функцию imgPromise с URL и цепочкой then/catch для обработки результата
imgPromise(url)
   // Если Promise успешно выполнился, вызываем then с результатом
   .then(result => console.log(result))
   // Если произошла ошибка, вызываем catch с сообщением об ошибке
   .catch(error => console.log(error));
