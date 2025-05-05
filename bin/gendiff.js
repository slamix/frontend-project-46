#!/usr/bin/env node
/* eslint-disable */

import { program } from 'commander';
import genDiff from '../index.js';

const gendiffCLI = () => {
  program
    .name('gendiff')
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format', 'stylish')
    .helpOption('-h, --help', 'output usage information')
    .action((file1, file2, options) => {
      console.log(genDiff(file1, file2, options.format));
    })
    .parse();
};

gendiffCLI();
