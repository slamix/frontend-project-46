#!/usr/bin/env node

import { program } from 'commander';
import _ from 'lodash';
import parseFiles from '../src/index.js';
import {
  getAddedItems,
  getRemovedItems,
  getChangedItems,
  getUnchangedItems,
  createOutput,
} from '../src/utils.js';

const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);

  const added = getAddedItems(firstFileData, secondFileData);
  const removed = getRemovedItems(firstFileData, secondFileData);
  const changed = getChangedItems(firstFileData, secondFileData);
  const unchanged = getUnchangedItems(firstFileData, secondFileData);

  const data = _.sortBy([...changed, ...added, ...removed, ...unchanged], ((node) => node.key));
  console.log(createOutput(data));
};

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action(genDiff);

program.parse();
