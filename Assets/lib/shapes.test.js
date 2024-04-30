const Shape = require('./lib/shapes');

describe('Shape Class', () => {
  test('Return false if no color, text, or shape is entered', () => {
    const myShape = new Shape();
    const filename = 'test_logo.svg';

    const missingColor = '';
    const missingText = '';
    const missingShape = '';

    const result = myShape.createFile(missingText, missingColor, missingShape, missingColor, filename);

    expect(result).toBe(false);
  });
});
