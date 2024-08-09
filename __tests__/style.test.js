import outputType from '../src/formatters/style.js';
import data from '../__fixtures__/dataForTests.js';

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