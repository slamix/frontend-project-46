import outputType from '../src/style.js';

const data = [
  { key: [ 'age' ] ,  value: 18, status: 'unchanged' },
  { key: [ 'country' ], value: 'Russia', status: 'added' },
  { key: [ 'hobby' ], value: 'football', status: 'removed' },
  { key: [ 'name' ], oldValue: 'Alex', newValue: 'Roma', status: 'changed' },
  { key: [ 'weight' ], oldValue: 59, newValue: 65, status: 'changed' },
];


test('output test 1', () => {
  expect(outputType(data)).toEqual(`{
    age: 18
  + country: Russia
  - hobby: football
  - name: Alex
  + name: Roma
  - weight: 59
  + weight: 65
}`)
});