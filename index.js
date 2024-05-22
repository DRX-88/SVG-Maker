const fs = require('fs');
const inquirer = require('inquirer');

const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');
const Design = require('./lib/Design');

const design = new Design();

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to add?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color is the shape?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color is the text?'
    },
];

function addShape() {
    inquirer.prompt(questions).then(answers => {
        switch (answers.shape) {
            case 'Circle':
                design.addShape(new Circle(50, answers.color));
                break;
            case 'Square':
                design.addShape(new Square(50, answers.color));
                break;
            case 'Triangle':
                design.addShape(new Triangle(100, answers.color));
                break;
        }
        design.addText(answers.text);
        design.setTextColor(answers.textColor);
        fs.writeFileSync('design.svg', design.generateCode());
        console.log('Success! SVG file generated.');
    });
}


addShape();




