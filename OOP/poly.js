class Shape {
  getArea() {
    return 0;
  }

  getName() {
    return "Generic Shape";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getName() {
    return "Circle";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getName() {
    return "Rectangle";
  }
}
const shapes = [new Circle(3), new Rectangle(4, 5), new Shape()];

shapes.forEach((shape) => {
  console.log(`${shape.getName()} area: ${shape.getArea()}`);
});
