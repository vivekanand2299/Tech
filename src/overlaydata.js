let intData;
let floatData;
let boolData;
let stringData;

intData = [
  { value: 1, isValid: Number.isInteger(1) },
  { value: 2, isValid: Number.isInteger(2) },
  { value: '"age"', isValid: Number.isInteger('"age"') },
  { value: '"phone no"', isValid: Number.isInteger('"phone no"') },
  { value: 55678, isValid: Number.isInteger(55678) },
  { value: 6.7, isValid: Number.isInteger(6.7) },
  { value: true, isValid: Number.isInteger(true) },
  { value: '"Vivek"', isValid: Number.isInteger('"Vivek"') },
  { value: 23, isValid: Number.isInteger(23) }
];

floatData = [
  { value: 3.14, isValid: typeof 3.14 === 'number' && !Number.isInteger(3.14) },
  { value: 2.718, isValid: typeof 2.718 === 'number' && !Number.isInteger(2.718) },
  { value: 'pi', isValid: false },
  { value: false, isValid: false },
  { value: 'gravity', isValid: false },
  { value: 9.81, isValid: typeof 9.81 === 'number' && !Number.isInteger(9.81) },
  { value: 1.618, isValid: typeof 1.618 === 'number' && !Number.isInteger(1.618) },
  { value: 7, isValid: typeof 7 === 'number' && !Number.isInteger(7) },
  { value: null, isValid: false }
];

boolData = [
  { value: true, isValid: typeof true === 'boolean' },
  { value: false, isValid: typeof false === 'boolean' },
  { value: 1, isValid: false },
  { value: 0, isValid: false },
  { value: 'yes', isValid: false },
  { value: 'no', isValid: false },
  { value: "null", isValid: false },
  { value: "undefined", isValid: false },
  { value: 'true', isValid: false }
];

stringData = [
  { value: 'hello', isValid: typeof 'hello' === 'string' },
  { value: 'world', isValid: typeof 'world' === 'string' },
  { value: 123, isValid: false },
  { value: true, isValid: false },
  { value: 'JavaScript', isValid: typeof 'JavaScript' === 'string' },
  { value: '456', isValid: typeof '456' === 'string' },
  { value: 789, isValid: false },
  { value: false, isValid: false },
  { value: 'example', isValid: typeof 'example' === 'string' }
];

export { intData, floatData, stringData, boolData };
