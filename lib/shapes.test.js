const {Circle, Triangle, Square} = require('./shapes.js');


describe("Circle", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedLogo = '<circle cx="100" cy="100" r="85" fill=\"\"/>';
      const circle = new Circle();
      const actualLogo = circle.render();
      expect(actualLogo).toEqual(expectedLogo);
    });
});

describe("Triangle", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedLogo = '<polygon points="150, 18 244, 182 56, 182" fill=\"\"/>';
      const triangle = new Triangle();
      const actualLogo = triangle.render();
      expect(actualLogo).toEqual(expectedLogo);
    });
});

describe("Square", () => {
    it("should render svg for an undefined fill/shapeColor", () => {
      const expectedLogo = '<rect width="100" height="100" fill=\"\"/>';
      const square = new Square();
      const actualLogo = square.render();
      expect(actualLogo).toEqual(expectedLogo);
    });
});