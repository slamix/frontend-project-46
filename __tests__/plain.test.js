import plainOutput from '../src/formatters/plain.js';

const data = [
  { key: ['follow'], value: false, status: 'removed' },
  { key: ['host'], value: 'hexlet.io', status: 'unchanged' },
  { key: ['proxy'], value: '123.234.53.22', status: 'removed' },
  { key: ['timeout'], value: [50, 20], status: 'changed' },
  { key: ['verbose'], value: true, status: 'added' },
];

const goodRes = `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`;

test('test 1', () => expect(plainOutput(data)).toEqual(goodRes));
