/*
  * Link : https://www.hackerrank.com/challenges/day-of-the-programmer/problem
  * Level : Easy
  * 
  * Day 21 - Day of the programmer - 07/04/2025
  *
  * 
  * 
  * 

*/

function dayOfProgrammer(year) {
  // Write your code here
  let day = 256;

  if(year < 1918) {
    if(year % 4 === 0) {
      day -= 244;
    } else {
      day -= 243;
    }
  } else if(year === 1918) {
    day = 26;
  } 
  else {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      day -= 244;
    } else {
      day -= 243;
    }
  }
  return `${day}.09.${year}`
}

console.log(dayOfProgrammer(1918));






