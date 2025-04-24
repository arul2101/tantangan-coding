/*
  * Link : https://www.hackerrank.com/challenges/the-hurdle-race/problem
  * Level : Easy
  * 
  * Day 28 - The Hardle Race - 14/04/2025
  *
  * 
  * 
  * 
*/

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  return k >= maxHeight 
    ? 0
    : maxHeight - k;
}

console.log(hurdleRace(4, [1,6,3,5,2])); // 2
console.log(hurdleRace(7, [2,5,4,5,2])); // 0