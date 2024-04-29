import _ from 'lodash';

const getDiff = (data1, data2) => {
  const keys = _.union([...Object.keys(data1), ...Object.keys(data2)]).sort();
  const res = keys.reduce((acc, key) => {
    let result;
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        result = { key: [key], value: data1[key], status: 'unchanged' };
      }
      if (data1[key] !== data2[key]) {
        result = {
          key: [key], oldValue: data1[key], newValue: data2[key], status: 'changed',
        };
      }
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        result = { key: [key], value: getDiff(data1[key], data2[key]), status: 'nested' };
      }
    }
    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      result = { key: [key], value: data1[key], status: 'removed' };
    }
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      result = { key: [key], value: data2[key], status: 'added' };
    }
    return [...acc, result];
  }, []);
  return res;
};

export default getDiff;
