import jsonOutput from '../src/formatters/json';
import data from '../__fixtures__/dataForTests';

test('test 1', () => {
  expect(jsonOutput(data)).toEqual(JSON.stringify(data, ' ', 2));
});
