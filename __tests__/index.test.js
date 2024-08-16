import genDiff from '../src/formatters/index.js';
import jsonOutput from '../src/formatters/json';
import plainOutput from '../src/formatters/plain.js';
import outputType from '../src/formatters/style.js';
import getDiff from '../src/comparator.js';
import data, { obj1, obj2 } from '../__fixtures__/dataForTests.js';

test('output test))', () => {
  expect(outputType(data)).toEqual(`{
    age: 18
  + country: Russia
  - hobby: football
  - name: Alex
  + name: Roma
  - weight: 59
  + weight: 65
}`);
});

test('json format test', () => {
  expect(jsonOutput(data)).toEqual(JSON.stringify(data, ' ', 2));
});

test('plain test', () => {
  expect(plainOutput(data)).toEqual(`Property 'country' was added with value: 'Russia'
Property 'hobby' was removed
Property 'name' was updated. From 'Alex' to 'Roma'
Property 'weight' was updated. From 59 to 65`);
});

test('compare two objects', () => {
  expect(getDiff(obj1, obj2)).toEqual(data);
});

test('with nested files stylish', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`);
});

test('plain format with nested files', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(`Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`);
});
