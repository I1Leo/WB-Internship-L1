'use strict'

class Shape {
   constructor() {
      // По умолчанию, у фигуры нет конкретных параметров
   }
   // Метод для расчета площади
   calculateArea() {
      throw new Error("Метод calculateArea должен быть реализован в подклассе");
   }

   // Метод для расчета периметра
   calculatePerimeter() {
      throw new Error("Метод calculatePerimeter должен быть реализован в подклассе");
   }
}

// Подкласс для прямоугольника
class Rectangle extends Shape {
   constructor(width, height) {
      // используем super() для вызова конструктора родительского класса Shape
      super();
      this.width = width;
      this.height = height;
   }

   // Переопределение метода для расчета площади
   calculateArea() {
      return this.width * this.height;
   }

   // Переопределение метода для расчета периметра
   calculatePerimeter() {
      return Math.round(2 * (this.width + this.height));
   }
}

// Подкласс для круга
class Circle extends Shape {
   constructor(radius) {
      super();
      this.radius = radius;
   }

   // Переопределение метода для расчета площади
   calculateArea() {
      return Math.round(Math.PI * Math.pow(this.radius, 2));
   }

   // Переопределение метода для расчета периметра
   calculatePerimeter() {
      return Math.round(2 * Math.PI * this.radius);
   }
}

// Подкласс для треугольника
class Triangle extends Shape {
   constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
   }

   // Переопределение метода для расчета площади
   calculateArea() {
      // Используем формулу Герона для расчета площади треугольника
      const p = (this.side1 + this.side2 + this.side3) / 2;
      return Math.round(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)));
   }

   // Переопределение метода для расчета периметра
   calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
   }
}

// Пример использования классов
const rectangle = new Rectangle(7, 4);
console.log("Прямоугольник:");
console.log("Площадь:", rectangle.calculateArea());
console.log("Периметр:", rectangle.calculatePerimeter());

const circle = new Circle(5);
console.log("\nКруг:");
console.log("Площадь:", circle.calculateArea());
console.log("Периметр:", circle.calculatePerimeter());

const triangle = new Triangle(6, 8, 10);
console.log("\nТреугольник:");
console.log("Площадь:", triangle.calculateArea());
console.log("Периметр:", triangle.calculatePerimeter());
