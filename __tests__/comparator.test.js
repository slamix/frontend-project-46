import getDiff from '../src/comparator.js';

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

const goodOutput = [
  { key: [ 'age' ] ,  value: 18, status: 'unchanged' },
  { key: [ 'country' ], value: 'Russia', status: 'added' },
  { key: [ 'hobby' ], value: 'football', status: 'removed' },
  { key: [ 'name' ], value: ['Alex', 'Roma'], status: 'changed' },
  { key: [ 'weight' ], value: [59, 65], status: 'changed' },
];

test('compare two objects', () => {
  expect(getDiff(obj1, obj2)).toEqual(goodOutput);
});