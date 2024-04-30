const REPLACER = '  ';

const outputType = (data) => {
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
      case 'nested':
        return `    ${node.key}: ${outputType(node.value)}`;
      default:
        throw new Error('Error!');
    }
  });

  return `{
${res.join('\n')}
}`;
};

// export default outputType;

const stylishOutput = (data) => {
  const createDepth = (node, depth = 1) => {
    const res = node.map((item) => {
      switch (item.status) {
        case 'changed':
          return `${REPLACER.repeat(depth)}- ${item.key}: ${item.oldValue}
${REPLACER.repeat(depth)}+ ${item.key}: ${item.newValue}`;
        case 'unchanged':
          return `${REPLACER.repeat(depth)}  ${item.key}: ${item.value}`;
        case 'added':
          return `${REPLACER.repeat(depth)}+ ${item.key}: ${item.value}`;
        case 'removed':
          return `${REPLACER.repeat(depth)}- ${item.key}: ${item.value}`;
        case 'nested':
          return `${REPLACER.repeat(depth)}  ${item.key}: ${createDepth(item.value, depth + 2)}`;
        default:
          throw new Error(`Unknown status: ${item.status}`);
      }
    });
    return `{
${res.join('\n')}
${REPLACER.repeat(depth - 1)}}`;
  };
  return createDepth(data, 1);
};

export default stylishOutput;
