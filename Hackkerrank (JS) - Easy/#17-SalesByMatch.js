/*
  * Link : https://www.hackerrank.com/challenges/sock-merchant/problem
  * Level : Easy
  * 
  * Day 25 - Sales By Match - 11/04/2025
  *
  * 
  * 
  * 

*/

function sockMerchant(n, ar) {
  let count = 0;
  let indexTemp = [];

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++) {
      if(i === j) {
        continue;
      }

      if(ar[i] === ar[j] && !indexTemp.includes(j) && !indexTemp.includes(i)) {
        count += 1;
        indexTemp.push(j, i);
        break;
      }
    }
  }

  return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3

2