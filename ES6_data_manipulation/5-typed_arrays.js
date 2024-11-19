export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const finalArray = new Int8Array(length);
  finalArray[position] = value;

  return finalArray;
}
