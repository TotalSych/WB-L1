// Создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
  // Методы расчета площади и периметра
  calculateArea() {
    throw new Error("Метод calculateArea должен быть реализован в подклассе");
  }

  calculatePerimeter() {
    throw new Error(
      "Метод calculatePerimeter должен быть реализован в подклассе"
    );
  }
}

// Подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Подкласс Circle (круг)
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.trunc(Math.PI * this.radius ** 2);
  }

  calculatePerimeter() {
    return Math.trunc(2 * Math.PI * this.radius);
  }
}

// Подкласс Triangle (треугольник)
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    // Используем формулу Герона для расчета площади треугольника
    const semiperimeter = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      semiperimeter *
        (semiperimeter - this.side1) *
        (semiperimeter - this.side2) *
        (semiperimeter - this.side3)
    );
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Пример использования классов
const rectangle = new Rectangle(4, 6);
console.log(rectangle.calculateArea()); // 24
console.log(rectangle.calculatePerimeter()); // 20

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78
console.log(circle.calculatePerimeter()); //  31

const triangle = new Triangle(3, 4, 5);
console.log(triangle.calculateArea()); // 6
console.log(triangle.calculatePerimeter()); // 12
