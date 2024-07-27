export default function pdateStudentGradeByCity(students, city, newGrades) {
  const filterCity = students.filter((item) => item.location === city);

  const studentGrade = filterCity.map((students) => {
    const gradeFilter = newGrades.filter((item) => item.studentId === students.id);

    let grade;

    if (gradeFilter[0]) {
      grade = gradeFilter[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...students,
      grade,
    };
  });

  return studentGrade;
}
