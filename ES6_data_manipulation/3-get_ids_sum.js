export default function getStudentIdsSum(studentIds) {
  const initialValue = 0;
  const sum = studentIds.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );

  return sum;
}
