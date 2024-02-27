import { addNumbers } from '../math';

test('adds two numbers correctly', () => {
  const result = addNumbers(2, 3);
  expect(result).toBe(5);
});

test2('adds two numbers correctly', () => {
    const result = addNumbers(2, 3);
    expect(result).toBe(6);
  });