const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(sideLength, color) {
        super();
        this.sideLength = sideLength;
        this.color = color;
    }

    generateCode() {
        return `<polygon points="${this.sideLength / 2},0 0,${this.sideLength} ${this.sideLength},${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = Triangle;