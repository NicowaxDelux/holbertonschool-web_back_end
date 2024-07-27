export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const studentId = students.map((item) => item.id);

  return studentId;
}
