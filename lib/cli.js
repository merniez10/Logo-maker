const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");


class CLIprompt{
    run(){
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "enter logo text(can't be more than 3 characters)",
                validate: (text) => text.length <= 3 || "must not be more than 3 characters",
            
            },
            {
                name: "textColor",
                type: "input",
                message: "enter a color",
            },
            {
                name: "logoShape",
                type: "list",
                message: "Select a shape for your logo",
                choices: ["circle", "triangle", "square"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Choose a color for your shape",

            }

        ])
        .then(({
            text, textColor, logoShape, shapeColor
        }) => {
            let shape;
            switch(logoShape){
                case "circle" :
                    shape = new Circle();
                    break;
                    case "triangle" :
                        shape = new Triangle();
                        break;
                        default:
                            shape = new Square();
                            break;
            }
            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render());

        })
    }
}

module.exports = CLIprompt;