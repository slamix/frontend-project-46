import jsonOutput from "../src/formatters/json";

const data = [
  { key: [ 'age' ] ,  value: 18, status: 'unchanged' },
  { key: [ 'country' ], value: 'Russia', status: 'added' },
  { key: [ 'hobby' ], value: 'football', status: 'removed' },
  { key: [ 'name' ], value: ['Alex', 'Roma'], status: 'changed' },
  { key: [ 'weight' ], value: [59, 65], status: 'changed' },
];

test('test 1', () => {
  expect(jsonOutput(data)).toEqual(JSON.stringify(data, ' ', 2));
})