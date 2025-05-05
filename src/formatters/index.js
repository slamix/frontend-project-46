/* eslint-disable */

import parseFiles from '../parsers.js';
import getDiff from '../comparator.js';
import stylishOutput from './style.js';
import plainOutput from './plain.js';
import jsonOutput from './json.js';

const genDiff = (file1, file2, options = 'stylish') => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);
  const res = getDiff(firstFileData, secondFileData);
  switch (options) {
    case 'stylish':
      return stylishOutput(res);
    case 'plain':
      return plainOutput(res);
    case 'json':
      return jsonOutput(res);
    default:
      throw new Error(`unknown option: ${options}`);
  }
};

export default genDiff;
