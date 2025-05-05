/* eslint-disable */

import _ from 'lodash';

const formatValue = (value, diff = null) => {
  if (diff === 'changed') return [formatValue(value[0]), formatValue(value[1])];
  if (_.isPlainObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return `${value}`;
};

const plainOutput = (data, prefix = []) => {
  const res = data.map((node) => {
    const propertyPath = [...prefix, node.key].join('.');
    const formatedValue = formatValue(node.value, node.status);
    switch (node.status) {
      case 'nested':
        return plainOutput(node.value, [...prefix, node.key]);
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${formatedValue[0]} to ${formatedValue[1]}`;
      case 'unchanged':
        return null;
      case 'added':
        return `Property '${propertyPath}' was added with value: ${formatedValue}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      default:
        throw new Error(`unknown status: ${node.status}`);
    }
  });
  return res
    .filter((item) => item !== null)
    .join('\n');
};

export default plainOutput;
