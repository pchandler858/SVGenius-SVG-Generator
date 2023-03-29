const { text } = require("stream/consumers");

class Shape {
  constructor() {
    this.color = `#00000`;
    this.textColor = "#FFFFFF";
  }
  setColor(color) {
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor - textColor;
  }
  //   render() {
  //     throw new Error("not implemented");
  //   }
}

class Circle extends Shape {
  render(text) {
    return `<svg><circle fill="${this.color}" cx="50" cy="50" r="40"/><text fill="${this.textColor}" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">${text}</text></svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
