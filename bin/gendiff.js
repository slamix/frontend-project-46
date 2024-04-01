#!/usr/bin/env node

import { program } from 'commander';
import _ from 'lodash';
import parseFiles from '../src/index.js';
import {
  createArrWithAddedItems,
  createArrWithRemovedItems,
  createArrWithChangedItems,
  createArrWithUnchangedItems,
  createOutput,
} from '../src/utils.js';

const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);

  const added = createArrWithAddedItems(firstFileData, secondFileData);
  const removed = createArrWithRemovedItems(firstFileData, secondFileData);
  const changed = createArrWithChangedItems(firstFileData, secondFileData);
  const unchanged = createArrWithUnchangedItems(firstFileData, secondFileData);

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
