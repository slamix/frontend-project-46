const getInfo = (data1, data2, key) => {
  if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
    if (data1[key] === data2[key]) {
      return { key: [key], value: data1[key], status: 'unchanged' };
    }
    return ({
      key: [key],
      oldValue: data1[key],
      newValue: data2[key],
      status: 'changed',
    });
  }
  if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
    return { key: [key], value: data1[key], status: 'removed' };
  }
  return { key: [key], value: data2[key], status: 'added' };
};

export default getInfo;
