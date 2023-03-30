// Import modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

function userPrompt() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Enter up to 3 characters:",
          // validate that user has entered at least 3 characters. If not throw validation message until user corrects.
          validate: function (input) {
            return (
              (input.length <= 3 && input.length > 0) ||
              "You must enter between 1 - 3 characters"
            );
          },
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a color or hex # for your text:",
        },
        {
          type: "list",
          name: "shape",
          message: "Pick a shape:",
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message: "Enter a color or hex # for your shape:",
        },
      ])
      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case "Circle":
            shape = new Circle(answers.text);
            break;
          case "Triangle":
            shape = new Triangle(answers.text);
            break;
          case "Square":
            shape = new Square(answers.text);
            break;
          default:
            break;
        }

        shape.setColor(answers.shapeColor);
        shape.setTextColor(answers.textColor);

        const svg = shape.render(answers.text);

        fs.writeFile("logo.html", svg, (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve("SVG Generated!!!");
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

userPrompt()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
