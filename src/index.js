#!/usr/bin/env node

import fs from 'fs';
import path from 'node:path';

const parseFiles = (file1, file2) => {
  const filepath1 = path.resolve(process.cwd(), file1);
  const filepath2 = path.resolve(process.cwd(), file2);
  const dataFile1 = JSON.stringify(JSON.parse(fs.readFileSync(filepath1, 'utf-8')), null, '  ');
  const dataFile2 = JSON.stringify(JSON.parse(fs.readFileSync(filepath2, 'utf-8')), null, '  ');
  return [dataFile1, dataFile2];
};
export default parseFiles;
