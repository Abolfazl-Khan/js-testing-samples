import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should return equivalent number', () => {
  const sampleNumber = '1';

  const testResult = transformToNumber(sampleNumber);

  expect(testResult).toBe(1);
});

it('should return NAN if there is an invalid number provided', () => {
  const sampleNumber = 'invalid';

  const testResult = transformToNumber(sampleNumber);

  expect(testResult).toBeNaN();
});

it('should return 0 if an empty string is provided', () => {
  const sampleNumber = '';

  const testResult = transformToNumber(sampleNumber);

  expect(testResult).toBe(0);
});
