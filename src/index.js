#!/usr/bin/env node
import getDiff from './comparator.js';
import stylishOutput from './style.js';
import parseFiles from './parsers.js';

const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);
  const res = getDiff(firstFileData, secondFileData);
  return stylishOutput(res);
};
export default genDiff;
