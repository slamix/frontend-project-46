import _ from 'lodash';
import getInfo from './getInfo.js';
/* eslint-disable */

const getDiff = (data1, data2) => {
  const keys = _.sortBy(_.union([...Object.keys(data1), ...Object.keys(data2)]));
  const res = keys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key: [key], value: getDiff(data1[key], data2[key]), status: 'nested' };
    }
    return getInfo(data1, data2, key);
  });
  return res;
};

export default getDiff;
