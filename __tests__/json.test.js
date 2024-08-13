import jsonOutput from '../src/formatters/json';
import data from '../__fixtures__/dataForTests';

test('json format test', () => {
  expect(jsonOutput(data)).toEqual(JSON.stringify(data, ' ', 2));
});
