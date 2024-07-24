function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let i;
  let j;
  for (i = 0; i < students.length; i++) {
    for (j = i + 1; j < students.length; j++) {
      if (students[i].score > students[j].score) {
        let formerStudent = students[i];
        students[i] = students[j];
        students[j] = formerStudent;
      }
    }
  }
  return students;
}

const students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];
console.log(sortStudentsByScore(students));
// [
//   { id: "S004", name: "Dao", score: 95 },
//   { id: "S002", name: "Boon", score: 92 },
//   { id: "S005", name: "Ek", score: 88 },
//   { id: "S001", name: "Anan", score: 85 },
//   { id: "S006", name: "Fah", score: 80 },
//   { id: "S003", name: "Chai", score: 78 }
// ]
