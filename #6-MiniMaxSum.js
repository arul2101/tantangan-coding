/*
  * Link : https://www.hackerrank.com/challenges/mini-max-sum/problem
  * 
  * Day 6 - Mini Max Sum - 23/03/2025
  *
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

  * 
  * 
*/

function miniMaxSum(arr) {
  const result = [];
  let temp;
  for(let i = 0; i < arr.length; i++) {
    temp = 0;
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        temp += arr[j];
      }
    }
    result.push(temp);
  }

  console.log(`${Math.min(...result)} ${Math.max(...result)}`)
}

miniMaxSum([1,2,3,4,5]);