/*
  * Link : https://www.hackerrank.com/challenges/electronics-shop/problem
  * Level : Easy
  * 
  * Day 26 - Electronics Shop - 12/04/2025
  *
  * 
  * 
  * 
*/


function getMoneySpent(keyboards, drives, b) {
  let values = [];

  for(let i = 0; i < keyboards.length; i++) {
    for(let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j];

      if(sum <= b) {
        values.push(sum);
      }
    }
  }

  if(values.length > 0) {
    return Math.max(...values);
  }

  return -1;
}

console.log(getMoneySpent([3,1], [5,2,8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1