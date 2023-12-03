const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Choose three letters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for your text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like to use for your logo?',
        choices: ['Circle', 'Triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be?'
    }

];

