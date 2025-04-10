/*
  * Link : https://www.hackerrank.com/challenges/counting-valleys/problem
  * Level : Easy
  * 
  * Day 24 - Counting Valleys - 10/04/2025
  *
  * 
  * 
  * 

*/

function countingValleys(steps, path) {
  let seaLevel = 0;
  let count = 0;
  let cases = {
    U: 1,
    D: -1
  }

  for(let i = 0; i < steps; i++) {
    if(seaLevel > 0) {
      seaLevel += cases[path[i]];
      continue
    }

    seaLevel += cases[path[i]];
    if(seaLevel == 0) {
      count += 1;
    }
  }

  return count;
}

console.log(countingValleys(8, 'UDDDUDUU'));