import _ from 'lodash';
import getInfo from './utils.js';

const obj1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

const obj2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

const getDiff = (data1, data2) => {
  const keys = _.union([...Object.keys(data1), ...Object.keys(data2)]).sort();
  const res = keys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key: [key], value: getDiff(data1[key], data2[key]), status: 'nested' };
    }
    return getInfo(data1, data2, key);
  });
  return res;
};

// console.log(getDiff(obj1, obj2)[0].value);
export default getDiff;
