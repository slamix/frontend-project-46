/* eslint-disable */

import path from 'node:path';
import fs from 'fs';
import * as yml from 'js-yaml';

const parseFiles = (file1, file2) => {
  const filepath1 = path.resolve(process.cwd(), file1);
  const filepath2 = path.resolve(process.cwd(), file2);
  if (path.extname(file1) === '.json') {
    const dataFile1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
    const dataFile2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));
    return [dataFile1, dataFile2];
  }
  const dataFile1 = yml.load(fs.readFileSync(filepath1, 'utf-8'));
  const dataFile2 = yml.load(fs.readFileSync(filepath2, 'utf-8'));
  return [dataFile1, dataFile2];
};

export default parseFiles;
