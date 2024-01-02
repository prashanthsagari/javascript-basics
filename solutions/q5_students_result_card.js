// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let displayResultCard = (studentName, subjects, scores) => {
  const totalMarks = scores.reduce((sum, currentValue) => sum + currentValue);
  const totalSubjects = scores.length;
  const percentage = (totalMarks / totalSubjects).toFixed(2);
  console.log(`Student Name: ${studentName}`);
  console.log(`Subjects: ${subjects.join(', ')}`);
  console.log(`Percentage: ${percentage}%`);
  console.log('------------------------');
};

for (let id = 1; id <= 50; id = id + 1) {
  const studentName = `Student_${id}`;
  const subjects = ['Grammer', 'Accounts'];
  const scores = [Math.floor(Math.random() * 40) + 50, Math.floor(Math.random() * 45) + 50];
  displayResultCard(studentName, subjects, scores);
}

for (let id = 51; id <= 100; id = id + 1) {
  const studentName = `Student_${id}`;
  const subjects = ['Grammer', 'Accounts'];
  const scores = [Math.floor(Math.random() * 40) + 50, Math.floor(Math.random() * 50) + 50];
  displayResultCard(studentName, subjects, scores);
}


