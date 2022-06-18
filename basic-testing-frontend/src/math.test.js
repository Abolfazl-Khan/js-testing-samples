import { it, expect } from 'vitest';
import { add } from './math';

it('should be sum of all numbers in array', () => {
  const testResult = add([1, 2, 3]);
  expect(testResult).toBe(6);
});
