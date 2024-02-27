import { addNumbers } from '../src/math.js';

test('adds two numbers correctly', () => {
  const result = addNumbers(2, 3);
  expect(result).toBe(5);
});
