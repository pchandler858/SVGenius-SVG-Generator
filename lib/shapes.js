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
    return `<svg width="300" height="200"><circle fill="${this.color}" cx="150" cy="100" r="80"/><text fill="${this.textColor}" x="150" y="117" text-anchor="middle" font-size="48">${text}</text></svg>`;
  }
}
class Triangle extends Shape {
  render(text) {
    return `<svg width="300" height="200"><polygon fill="${this.color}" points="70,180 230,180 150,20"/><text fill="${this.textColor}" x="150" y="150" text-anchor="middle" font-size="35">${text}</text></svg>`;
  }
}
class Square extends Shape {
  render(text) {
    return `<svg width="300" height="200"><rect fill="${this.color}" x="10" y="10" width="80" height="80"/><text fill="${this.textColor}" x="50" y="55" text-anchor="middle">${text}</text></svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
