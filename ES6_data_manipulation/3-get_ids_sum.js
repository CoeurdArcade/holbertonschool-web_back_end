export default function getStudentIdsSum(paramArray) {
  const idsSum = paramArray.reduce((total, value) => total + value.id, 0);
  return idsSum;
}
