const Circle = require('../Circle');
const Square = require('../Square');
const Triangle = require('../Triangle');

test('Circle', () => {
    const circle = new Circle(50, 'red');
    expect(circle.generateCode()).toBe('<circle cx="50" cy="50" r="50" fill="red" />');
});

test('Square', () => {
    const square = new Square(50, 'blue');
    expect(square.generateCode()).toBe('<rect width="50" height="50" fill="blue" />');
});

test('Triangle', () => {
    const triangle = new Triangle(100, 'green');
    expect(triangle.generateCode()).toBe('<polygon points="50,0 0,100 100,100" fill="green" />');
});



