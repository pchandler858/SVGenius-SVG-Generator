// Import modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");

function userPrompt() {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters:",
        // validate that user has entered at least 3 characters. If not throw validation message until user corrects.
        validate: function (input) {
          return input.length <= 3 || "Please enter 3 characters max";
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
    ]);
  }).then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        break;
    }
  });
}

userPrompt();
