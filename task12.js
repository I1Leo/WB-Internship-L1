'use strict'

let bookObj = {
   name: "Норвержский лес",
   author: "Харуки Мураками",
   year: 1987,

   // Геттер, возвращающий информацию о книге
   get aboutBook() {
      return `Название: ${this.name}\nАвтор: ${this.author}\nГод издания: ${this.year}`
   },

   // Сеттер для установки нового значения названия книги
   set setName(value) {
      if (typeof value === 'string') {
         this.name = value;
      } else throw new Error('Invalid value');
   },

   // Сеттер для установки нового значения автора книги
   set setAuthor(value) {
      if (typeof value === 'string') {
         this.author = value;
      } else throw new Error('Invalid value');
   },

   // Сеттер для установки нового значения года издания книги
   set setYear(value) {
      if (typeof value === 'number') {
         this.year = value;
      } else throw new Error('Invalid value');
   },
}


// Установка новых значений с использованием сеттеров
bookObj.setName = 'Война и мир';
bookObj.setAuthor = 'Лев Николаевич Толстой';
bookObj.setYear = 1869;

// Вывод обновленной информации о книге с использованием геттера
console.log(bookObj.aboutBook);


