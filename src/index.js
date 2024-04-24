#!/usr/bin/env node
import getDiff from './comparator.js';
import outputType from './style.js';
import parseFiles from './parsers.js';

const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);
  const res = getDiff(firstFileData, secondFileData);
  return outputType(res);
};
export default genDiff;
