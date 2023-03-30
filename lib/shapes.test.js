const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    test("returns a circle svg with the specified color and text", () => {
      const circle = new Circle();
      circle.setColor("#FF0000");
      circle.setTextColor("#000000");
      const svg = circle.render("ABC");
      expect(svg).toBe(
        '<svg width="250" height="250"><circle fill="#FF0000" cx="50" cy="50" r="40"/><text fill="#000000" x="50" y="55" text-anchor="middle">ABC</text></svg>'
      );
    });
  });
  describe("Triangle", () => {
    test("returns a triangle svg with the specified color and text", () => {
      const triangle = new Triangle();
      triangle.setColor("#FF0000");
      triangle.setTextColor("#000000");
      const svg = triangle.render("DEF");
      expect(svg).toBe(
        `<svg width="250" height="250"><polygon fill="#FF0000" points="10,90 90,90 50,10"/><text fill="#000000" x="50" y="65" text-anchor="middle">DEF</text></svg>`
      );
    });
  });
  describe("Square", () => {
    test("returns a square svg with the specified color and text", () => {
      const square = new Square();
      square.setColor("#FF0000");
      square.setTextColor("#000000");
      const svg = square.render("GHI");
      expect(svg).toBe(
        `<svg width="250" height="250"><rect fill="#FF0000" x="10" y="10" width="80" height="80"/><text fill="#000000" x="50" y="55" text-anchor="middle">GHI</text></svg>`
      );
    });
  });
});
