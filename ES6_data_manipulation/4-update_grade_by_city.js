export default function updateStudentGradeByCity(paramArray, city, newGrades) {
  const citiesArray = paramArray.filter((student) => student.location === city);
  const finalArray = citiesArray.map((student) => {
    const searchsGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    if (searchsGrade && searchsGrade.grade !== undefined) {
      return { ...student, grade: searchsGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return finalArray;
}
