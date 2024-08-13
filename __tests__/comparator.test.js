import getDiff from '../src/comparator.js';
import data from '../__fixtures__/dataForTests.js';

const obj1 = {
  name: 'Alex',
  age: 18,
  weight: 59,
  hobby: 'football',
};

const obj2 = {
  name: 'Roma',
  age: 18,
  weight: 65,
  country: 'Russia',
};

test('compare two objects', () => {
  expect(getDiff(obj1, obj2)).toEqual(data);
});
