const { addNumbers } = require('../math');

test('adds two numbers correctly', () => {
  const result = addNumbers(10, 10);
  expect(result).toBe(20);
});
