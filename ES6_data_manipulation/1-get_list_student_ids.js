export default function getListStudentIds(paramArray) {
  if (paramArray instanceof Array) {
    const idsArray = paramArray.map((students) => students.id);
    return idsArray;
  }
  return [];
}
