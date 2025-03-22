/*
  * Link : https://www.hackerrank.com/challenges/grading/problem
  * 
  * Day 7 - Grading Students - 24/03/2025
  *
  
    - Jika selisih antara nilai dan kelipatan 5 berikutnya kurang dari 3, bulatkan nilai ke atas ke kelipatan 5 berikutnya.
    - Jika nilai kelas kurang dari 38, pembulatan tidak terjadi karena hasilnya tetap nilai gagal.
  * 
  * 
*/

function gradingStudents(grades) {
  const result = [];
  for(let i = 0; i < grades.length; i++) {
    if(grades[i] < 38) {
      result.push(grades[i])
    } else {
      const gradesNextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
      const gradesRoundUp = gradesNextMultipleOf5 - grades[i] < 3 ? gradesNextMultipleOf5 : grades[i];

      result.push(gradesRoundUp)
    }
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));

