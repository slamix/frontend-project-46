/* eslint-disable */

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '../__fixtures__', filename);

test('makeGendiff: Throws "unknown format"', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  expect(() => genDiff(filepath1, filepath2, 'abrakadabra')).toThrow('unknown option: abrakadabra');
});

describe.each([
  ['stylish', 'expectedStylish.txt'],
  ['plain', 'expectedPlain.txt'],
  ['json', 'expectedJson.json'],
])('%s formatter', (formatter, expectedFile) => {
  const filepathOfExpected = getFixturePath(expectedFile);
  const expected = fs.readFileSync(filepathOfExpected, 'utf-8');

  test.each([['json'], ['yml']])('%s files', (extension) => {
    const filepath1 = getFixturePath(`file1.${extension}`);
    const filepath2 = getFixturePath(`file2.${extension}`);

    const result = genDiff(filepath1, filepath2, formatter);

    expect(result).toBe(expected);
  });
});
