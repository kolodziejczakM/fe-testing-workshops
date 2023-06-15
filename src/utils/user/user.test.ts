import * as userUtils from './user';

// const getFullNameMock = jest.fn();
// jest.mock('./user', () => ({
//   ...jest.requireActual('./user'),
//   getFullName: () => getFullNameMock(),
// }));

// Things to mention:
// TEST CASE PHASES: https://medium.com/plain-and-simple/arrange-act-assert-vs-given-when-then-c22da421bf75
// TEST CASE NESTING: https://kentcdodds.com/blog/avoid-nesting-when-youre-testing
/////

// FIRST STRUCTURAL OPTION - nesting

// name of module
describe('user', () => {
  // name of function
  describe('getFullName', () => {
    it('should return the full name when both first name and last name are provided', () => {
      const firstName = 'John';
      const lastName = 'Doe';
      const expected = 'John Doe';

      const actual = userUtils.getFullName(firstName, lastName);

      expect(actual).toBe(expected);
    });

    it('should return the first name when only the first name is provided', () => {
      const firstName = 'John';
      const expected = 'John';

      const actual = userUtils.getFullName(firstName);

      expect(actual).toBe(expected);
    });

    it('should return the last name when only the last name is provided', () => {
      const lastName = 'Doe';
      const expected = 'Doe';

      const actual = userUtils.getFullName(undefined, lastName);

      expect(actual).toBe(expected);
    });

    it('should return an empty string when no name is provided', () => {
      const expected = '';

      const actual = userUtils.getFullName();

      expect(actual).toBe(expected);
    });
  });

  describe('getUserName', () => {
    it('calls getFullName once', () => {
      jest.spyOn(userUtils, 'getFullName');

      userUtils.getUserName();

      // Won't work in all envs. It depends on how the module is transformed (e.g. ts-jest vs babel-jest)
      expect(userUtils.getFullName).toHaveBeenCalledTimes(1);
      expect(userUtils.getFullName).toHaveBeenCalledWith('', '');
    });
  });
});

// SECOND STRUCTURAL OPTION - no nesting

it('should return the full name when both first name and last name are provided', () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const expected = 'John Doe';

  const actual = userUtils.getFullName(firstName, lastName);

  expect(actual).toBe(expected);
});

it('should return the first name when only the first name is provided', () => {
  const firstName = 'John';
  const expected = 'John';

  const actual = userUtils.getFullName(firstName);

  expect(actual).toBe(expected);
});

it('should return the last name when only the last name is provided', () => {
  const lastName = 'Doe';
  const expected = 'Doe';

  const actual = userUtils.getFullName(undefined, lastName);

  expect(actual).toBe(expected);
});

it('should return an empty string when no name is provided', () => {
  const expected = '';

  const actual = userUtils.getFullName();

  expect(actual).toBe(expected);
});

// THIRD STRUCTURAL OPTION - TABLE DRIVEN TESTS

describe('user - table driven test', () => {
  beforeEach(() => {
    // console.log('outer beforeEach called!');
  });

  describe('getFullName', () => {
    beforeEach(() => {
      // console.log('inner beforeEach called!');
    });

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
        //  console.log('test case called');
        expect(userUtils.getFullName(...input)).toBe(output);
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
