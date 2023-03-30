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
}

class Circle extends Shape {
  render(text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle fill="${
      this.color
    }" cx="150" cy="100" r="80"/><text fill="${
      this.textColor
    }" x="150" y="117" text-anchor="middle" font-size="48">${text.toUpperCase()}</text></svg>`;
  }
}
class Triangle extends Shape {
  render(text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon fill="${
      this.color
    }" points="70,180 230,180 150,20"/><text fill="${
      this.textColor
    }" x="150" y="150" text-anchor="middle" font-size="35">${text.toUpperCase()}</text></svg>`;
  }
}
class Square extends Shape {
  render(text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect fill="${
      this.color
    }" x="70" y="20" width="160" height="160"/><text fill="${
      this.textColor
    }" x="150" y="115" text-anchor="middle" font-size="48">${text.toUpperCase()}</text></svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
