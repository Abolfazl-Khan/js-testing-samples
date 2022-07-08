import { it, expect } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

it('should throw an error with a message that contains a reason (must not be empty)', () => {
  const sampleInput = '';
  const validation = () => validateStringNotEmpty(sampleInput);
  expect(validation).toThrow(/must not be empty/);
});

it('should throw an error if a long string of blanks is provided', () => {
  const sampleInput = '';
  const validation = () => validateStringNotEmpty(sampleInput);
  expect(validation).toThrow();
});

it('should throw an error if any other value than a string is provided', () => {
  const inputNum = 1;
  const inputBool = true;
  const inputObj = {};

  const validationNum = () => validateStringNotEmpty(inputNum);
  const validationBool = () => validateStringNotEmpty(inputBool);
  const validationObj = () => validateStringNotEmpty(inputObj);

  expect(validationNum).toThrow();
  expect(validationBool).toThrow();
  expect(validationObj).toThrow();
});

it('should work fine if a non-empty string is provided', () => {
  const input = 'valid';
  const validation = () => validateStringNotEmpty(input);
  expect(validation).not.toThrow();
});

it('should throw an error with a message that contains a reason (invalid number)', () => {
  const input = NaN;
  const validation = () => validateNumber(input);
  expect(validation).toThrow(/Invalid number/);
});

it('should throw an error if a non-numeric value is provided', () => {
  const input = '1';
  const validation = () => validateNumber(input);
  expect(validation).toThrow(/String numbers are invalid/);
});

it('should not throw an error, if a number is provided', () => {
  const input = 1;
  const validation = () => validateNumber(input);
  expect(validation).not.toThrow();
});
