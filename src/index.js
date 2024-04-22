#!/usr/bin/env node

import fs from 'fs';
import _ from 'lodash';
import path from 'node:path';
import {
  getAddedItems,
  getRemovedItems,
  getChangedItems,
  getUnchangedItems,
  createOutput,
} from './utils.js';

const parseFiles = (file1, file2) => {
  const filepath1 = path.resolve(process.cwd(), file1);
  const filepath2 = path.resolve(process.cwd(), file2);
  const dataFile1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
  const dataFile2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));
  return [dataFile1, dataFile2];
};
const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);

  const added = getAddedItems(firstFileData, secondFileData);
  const removed = getRemovedItems(firstFileData, secondFileData);
  const changed = getChangedItems(firstFileData, secondFileData);
  const unchanged = getUnchangedItems(firstFileData, secondFileData);

  const data = _.sortBy([...changed, ...added, ...removed, ...unchanged], ((node) => node.key));
  console.log(createOutput(data));
  return createOutput(data);
};
export default genDiff;
