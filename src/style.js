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

export default outputType;
