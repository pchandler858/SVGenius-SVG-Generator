const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    test("returns a circle svg with the specified color and text", () => {
      const circle = new Circle();
      circle.setColor("#FF0000");
      circle.setTextColor("#000000");
      const svg = circle.render("abc");
      expect(svg).toBe(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle fill="#FF0000" cx="150" cy="100" r="80"/><text fill="#000000" x="150" y="117" text-anchor="middle" font-size="48">ABC</text></svg>'
      );
    });
  });
  describe("Triangle", () => {
    test("returns a triangle svg with the specified color and text", () => {
      const triangle = new Triangle();
      triangle.setColor("#FF0000");
      triangle.setTextColor("#000000");
      const svg = triangle.render("def");
      expect(svg).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon fill="#FF0000" points="70,180 230,180 150,20"/><text fill="#000000" x="150" y="150" text-anchor="middle" font-size="35">DEF</text></svg>`
      );
    });
  });
  describe("Square", () => {
    test("returns a square svg with the specified color and text", () => {
      const square = new Square();
      square.setColor("#FF0000");
      square.setTextColor("#000000");
      const svg = square.render("gHi");
      expect(svg).toBe(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect fill="#FF0000" x="70" y="20" width="160" height="160"/><text fill="#000000" x="150" y="115" text-anchor="middle" font-size="48">GHI</text></svg>`
      );
    });
  });
});
