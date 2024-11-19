export default function cleanSet(inputSet, startString) {
  const emptyStr = '';
  if (typeof startString !== 'string') {
    return emptyStr;
  }

  if (startString !== '') {
    // Convert the Set to an array for easier manipulation
    const setArray = Array.from(inputSet);
    while (setArray.indexOf(undefined) !== -1) {
      const index = setArray.indexOf(undefined);
      setArray.splice(index, 1);
    }
    // Use the filter() method to keep only the values that start with startString
    const filteredArray = setArray.filter((value) => value.startsWith(startString));

    // Use the map() method to extract the part of the string after startString
    const cleanedArray = filteredArray.map((value) => value.substring(startString.length));

    // Join the cleanedArray elements with "-"
    const resultString = cleanedArray.join('-');

    return resultString;
  }
  return emptyStr;
}
