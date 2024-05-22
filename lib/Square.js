const Shape = require('./Shape');

class Square extends Shape {
    constructor(sideLength, color) {
        super();
        this.sideLength = sideLength;
        this.color = color;
    }

    generateCode() {
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = Square;