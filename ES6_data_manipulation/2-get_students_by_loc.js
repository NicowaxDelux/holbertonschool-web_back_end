export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const filterCity = students.filter((item) => item.location === city);

  return filterCity;
}
