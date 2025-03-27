/*
  * Link : https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
  * Level : Easy
  * 
  * Day 10 - Breaking the Records - 27/03/2025
  *
  * 
  * 
*/

function breakingRecords(scores) {
  let countBreakingLeastRecords = 0;
  let countBreakingMostRecords = 0;
  let temp = scores[0];


  for(let i = 1; i < scores.length; i++) {
    if(scores[i] < temp) {
      countBreakingLeastRecords += 1;
      temp = scores[i];
    }
  }

  temp = scores[0];

  for(let i = 1; i < scores.length; i++) {
    if(scores[i] > temp) {
      countBreakingMostRecords += 1;
      temp = scores[i]
    }
  }

  return [countBreakingMostRecords, countBreakingLeastRecords];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));




