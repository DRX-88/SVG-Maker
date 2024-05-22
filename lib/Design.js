class Design {
    constructor() {
        this.shapes = [];
        this.text = '';
        this.textColor = '';
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    addText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    generateCode() {
        let code = '<svg width="100" height="100">';
        this.shapes.forEach(shape => {
            code += shape.generateCode();
        });
        code += `<text x="50%" y="50%" font-size="25" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}" font-family="Arial">${this.text}</text>`;
        code += '</svg>';
        return code;
    }
}

module.exports = Design;