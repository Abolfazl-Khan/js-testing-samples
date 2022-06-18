import { it, expect } from 'vitest';
import { add } from './math';

it('should be sum of all numbers in array', () => {
  //Arrange
  const sampleArray = [1, 2, 3];

  //Act
  const testResult = add(sampleArray);
  //Assert
  const expectedResult = sampleArray.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );
  expect(testResult).toBe(expectedResult);
});
