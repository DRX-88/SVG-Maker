const Shape = require('./Shape'); 

class Circle extends Shape {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }

    generateCode() {
        return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;