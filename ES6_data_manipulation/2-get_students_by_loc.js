export default function getStudentsByLocation(paramArray, city) {
  let finalArray = [];
  finalArray = paramArray.filter((students) => students.location === city);
  return finalArray;
}
