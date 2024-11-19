export default function hasValuesFromArray(paramSet, paramArray) {
  const testSet = new Set(paramArray);
  for (const item of testSet) {
    if (!paramSet.has(item)) {
      return false;
    }
  }
  return true;
}
