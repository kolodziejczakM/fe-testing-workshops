import { getFullName } from './user';

// TEST CASE PHASES: https://medium.com/plain-and-simple/arrange-act-assert-vs-given-when-then-c22da421bf75

// FIRST STRUCTURAL OPTION - nesting

// name of module
describe('user', () => {
  // name of function
  describe('getFullName', () => {
    it('should return the full name when both first name and last name are provided', () => {
      const firstName = 'John';
      const lastName = 'Doe';
      const expected = 'John Doe';

      const actual = getFullName(firstName, lastName);

      expect(actual).toBe(expected);
    });

    it('should return the first name when only the first name is provided', () => {
      const firstName = 'John';
      const expected = 'John';

      const actual = getFullName(firstName);

      expect(actual).toBe(expected);
    });

    it('should return the last name when only the last name is provided', () => {
      const lastName = 'Doe';
      const expected = 'Doe';

      const actual = getFullName(undefined, lastName);

      expect(actual).toBe(expected);
    });

    it('should return an empty string when no name is provided', () => {
      const expected = '';

      const actual = getFullName();

      expect(actual).toBe(expected);
    });
  });
});

// SECOND STRUCTURAL OPTION - no nesting

test('should return the full name when both first name and last name are provided', () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const expected = 'John Doe';

  const actual = getFullName(firstName, lastName);

  expect(actual).toBe(expected);
});

test('should return the first name when only the first name is provided', () => {
  const firstName = 'John';
  const expected = 'John';

  const actual = getFullName(firstName);

  expect(actual).toBe(expected);
});

test('should return the last name when only the last name is provided', () => {
  const lastName = 'Doe';
  const expected = 'Doe';

  const actual = getFullName(undefined, lastName);

  expect(actual).toBe(expected);
});

test('should return an empty string when no name is provided', () => {
  const expected = '';

  const actual = getFullName();

  expect(actual).toBe(expected);
});

// THIRD STRUCTURAL OPTION - TABLE DRIVEN TESTS

describe('user', () => {
  describe('getFullName', () => {
    const testCases = [
      { input: ['John', 'Doe'], output: 'John Doe' },
      { input: ['John'], output: 'John' },
      { input: ['Doe'], output: 'Doe' },
      { input: [], output: '' },
    ];

    testCases.forEach(({ input, output }) => {
      const inputDesc = input.length === 0 ? 'NO INPUT' : input;
      const ouputDesc = output === '' ? 'EMPTY STRING' : output;

      it(`for given arguments: ${inputDesc} it returns: ${ouputDesc}`, () => {
        expect(getFullName(...input)).toBe(output);
      });
    });
  });
});

// OFFICIAL SYNTAX for TABLE DRIVEN TESTS

// const testData = [
//     ['input1', 'output1'],
//     ['input2', 'output2'],
//     ['input3', 'output3'],
// ]

// test.each(testData)('myFunc work correctly for %s',(input, output) =>{
//       expect(yourFunc(input)).toBe(output)
// })
