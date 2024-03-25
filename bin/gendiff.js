#!/usr/bin/env node

import { program } from 'commander';
import parseFiles from '../src/index.js';

const genDiff = (file1, file2) => {
  const [firstFileData, secondFileData] = parseFiles(file1, file2);
  console.log(firstFileData);
  console.log(secondFileData);
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
