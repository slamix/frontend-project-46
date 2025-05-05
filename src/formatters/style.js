/* eslint-disable */

import _ from 'lodash';

const LONGPADDING = '    ';
const SHORTPADDING = '  ';

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const keys = Object.keys(data);
  const res = keys.map((key) => `${LONGPADDING.repeat(depth + 1)}${key}: ${stringify(data[key], depth + 1)}`);
  return `{
${res.join('\n')}
${LONGPADDING.repeat(depth)}}`;
};

const stylishOutput = (data) => {
  const createDepth = (node, depth = 1) => {
    const res = node.map((item) => {
      switch (item.status) {
        case 'changed':
          return `${LONGPADDING.repeat(depth - 1)}${SHORTPADDING}- ${item.key}: ${stringify(item.value[0], depth)}
${LONGPADDING.repeat(depth - 1)}${SHORTPADDING}+ ${item.key}: ${stringify(item.value[1], depth)}`;
        case 'unchanged':
          return `${LONGPADDING.repeat(depth)}${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${LONGPADDING.repeat(depth - 1)}${SHORTPADDING}+ ${item.key}: ${stringify(item.value, depth)}`;
        case 'removed':
          return `${LONGPADDING.repeat(depth - 1)}${SHORTPADDING}- ${item.key}: ${stringify(item.value, depth)}`;
        case 'nested':
          return `${LONGPADDING.repeat(depth)}${item.key}: ${createDepth(item.value, depth + 1)}`;
        default:
          throw new Error(`Unknown status: ${item.status}`);
      }
    });
    return `{
${res.join('\n')}
${LONGPADDING.repeat(depth - 1)}}`;
  };
  return createDepth(data);
};

export default stylishOutput;
