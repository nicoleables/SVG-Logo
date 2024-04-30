const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');
let fileCount = 1;
if (fs.existsSync('fileCount.txt')) {
    fileCount = parseInt(fs.readFileSync('fileCount.txt', 'utf8'));
}

function createUniqueLogo() {
inquirer.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'What text should go inside of the svg (at most 3 characters)?',
        validate: function(answer) {
        if (answer.length > 3) {
            return false;
        }
        return true
      }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be (must be a valid color or a hexadecimal)?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape should the logo be?',
        choices: ['circle', 'triangle', 'rect']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the svg be?'
    }
]).then((answers) => {
    const myShape = new Shape();
    const text = answers.characters;
    const textColor = answers.textColor;
    const shape = answers.shape;
    const shapeColor = answers.shapeColor;
    const filename = `logo_${fileCount}.svg`;
    
    myShape.createFile(text, textColor, shape, shapeColor, filename);
        fileCount++;
        fs.writeFileSync('fileCount.txt', fileCount.toString(), 'utf8');

        createUniqueLogo();
 });
} 
createUniqueLogo();