export default function cleanSet(set, startString) {
  const newString = [];

  if (typeof set !== 'object'
        || typeof startString !== 'string'
        || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newString.push(item.slice(startString.length));
    }
  }

  return newString.join('-');
}
