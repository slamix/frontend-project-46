import _ from 'lodash';

const getDiff = (data1, data2) => {
  const keysOfFirstData = Object.keys(data1);
  const keysOfSecondData = Object.keys(data2);
  const removed = keysOfFirstData
    .filter((key) => !keysOfSecondData.includes(key))
    .map((key) => ({ key: [key], value: data1[key], status: 'removed' }));
  const added = keysOfSecondData
    .filter((key) => !keysOfFirstData.includes(key))
    .map((key) => ({ key: [key], value: data2[key], status: 'added' }));

  const unchanged = keysOfSecondData
    .filter((key) => keysOfFirstData.includes(key))
    .filter((key) => data1[key] === data2[key])
    .map((key) => ({ key: [key], value: data2[key], status: 'unchanged' }));

  const changed = keysOfSecondData
    .filter((key) => keysOfFirstData.includes(key))
    .filter((key) => data1[key] !== data2[key])
    .map((key) => ({
      key: [key],
      oldValue: data1[key],
      newValue: data2[key],
      status: 'changed',
    }));
  return _.sortBy([...added, ...changed, ...removed, ...unchanged], ((node) => node.key));
};
export default getDiff;
