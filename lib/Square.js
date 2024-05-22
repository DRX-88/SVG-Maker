const Shape = require('./Shape');

class Square extends Shape {
    constructor(sideLength, color) {
        super();
        this.sideLength = sideLength;
        this.color = color;
    }

    generateCode() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = Square;