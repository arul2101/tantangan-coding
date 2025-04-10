/*
  * Link : https://www.hackerrank.com/challenges/bon-appetit/problem
  * Level : Easy
  * 
  * Day 23 - Bill Division - 09/04/2025
  *
  * 
  * 
  * 

*/

function bonAppetit(bill, k, b) {
  let count = bill.reduce((a, b) => a + b, 0);
  count = count - bill[k];

  const result = count / 2;

  console.log(result === b ? 'Bon Appetit' : b - result);
}

bonAppetit([3,10,2,9], 1, 12);
bonAppetit([3,10,2,9], 1, 7);