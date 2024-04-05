const getAddedItems = (firstFileData, secondFileData) => {
  const keysOfFirstFile = Object.keys(firstFileData);
  const keysOfSecondFile = Object.keys(secondFileData);

  const addedItems = keysOfSecondFile
    .filter((key) => !keysOfFirstFile.includes(key))
    .map((key) => ({ key: [key], value: secondFileData[key], status: 'added' }));

  return addedItems;
};

const getRemovedItems = (firstFileData, secondFileData) => {
  const keysOfFirstFile = Object.keys(firstFileData);
  const keysOfSecondFile = Object.keys(secondFileData);

  const removedItems = keysOfFirstFile
    .filter((key) => !keysOfSecondFile.includes(key))
    .map((key) => ({ key: [key], value: firstFileData[key], status: 'removed' }));

  return removedItems;
};

const getUnchangedItems = (firstFileData, secondFileData) => {
  const keysOfFirstFile = Object.keys(firstFileData);
  const keysOfSecondFile = Object.keys(secondFileData);

  const unchangedItems = keysOfSecondFile
    .filter((key) => keysOfFirstFile.includes(key))
    .filter((key) => firstFileData[key] === secondFileData[key])
    .map((key) => ({ key: [key], value: secondFileData[key], status: 'unchanged' }));

  return unchangedItems;
};

const getChangedItems = (firstFileData, secondFileData) => {
  const keysOfFirstFile = Object.keys(firstFileData);
  const keysOfSecondFile = Object.keys(secondFileData);

  const changedItems = keysOfSecondFile
    .filter((key) => keysOfFirstFile.includes(key))
    .filter((key) => firstFileData[key] !== secondFileData[key])
    .map((key) => ({
      key: [key],
      oldValue: firstFileData[key],
      newValue: secondFileData[key],
      status: 'changed',
    }));

  return changedItems;
};

const createOutput = (data) => {
  const res = data.map((node) => {
    switch (node.status) {
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.newValue}`;
      case 'unchanged':
        return `    ${node.key}: ${node.value}`;
      case 'added':
        return `  + ${node.key}: ${node.value}`;
      case 'removed':
        return `  - ${node.key}: ${node.value}`;
      default:
        throw new Error('Error!');
    }
  });

  return `{
${res.join('\n')}
}`;
};

export {
  getAddedItems,
  getRemovedItems,
  getChangedItems,
  getUnchangedItems,
  createOutput,
};
