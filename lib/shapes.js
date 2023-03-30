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
    this.textColor = textColor;
  }
  //   render() {
  //     throw new Error("not implemented");
  //   }
}

class Circle extends Shape {
  render(text) {
    return `<svg><circle fill="${this.color}" cx="50" cy="50" r="40"/><text fill="${this.textColor}" x="50" y="55" text-anchor="middle">${text}</text></svg>`;
  }
}
class Triangle extends Shape {
  render(text) {
    return `<svg><polygon fill="${this.color}" points="10,90 90,90 50,10"/><text fill="${this.textColor}" x="50" y="55" text-anchor="middle">${text}</text></svg>`;
  }
}

class Square extends Shape {
  render(text) {
    return `<svg><rect fill="${this.color}" x="10" y="10" width="80" height="80"/><text fill="${this.textColor}" x="50" y="55" text-anchor="middle">${text}</text></svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
