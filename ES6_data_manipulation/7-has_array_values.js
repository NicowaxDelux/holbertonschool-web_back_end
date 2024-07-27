export default function hasValuesFromArray(set, array) {
  const elementExist = array.every((element) => set.has(element));

  return elementExist;
}
