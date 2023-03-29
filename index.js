// Import modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

function userPrompt() {
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for text:",
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
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color or hex # for your shape:",
      },
    ]);
  });
}
