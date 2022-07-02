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

it('should return NAN if there is an invalid number in the provided array', () => {
  const sampleArray = ['invalid', 2];

  const testResult = add(sampleArray);

  expect(testResult).toBeNaN();
});

it('should work with an array of numeric string values', () => {
  const sampleArray = ['1', '2'];

  const testResult = add(sampleArray);

  const expectedResult = sampleArray.reduce(
    (preValue, curValue) => +preValue + +curValue,
    0
  );
  expect(testResult).toBe(expectedResult);
});

it('should return 0 if an empty array is provided', () => {
  const sampleArray = [];

  const testResult = add(sampleArray);

  expect(testResult).toBe(0);
});

it('should throw an error if no value is passed to te function', () => {
  const resultFunction = () => {
    add();
  };

  expect(resultFunction).toThrow();
});
