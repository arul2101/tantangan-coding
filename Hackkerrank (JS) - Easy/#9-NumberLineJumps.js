/*
  * Link : https://www.hackerrank.com/challenges/kangaroo/problem
  * Level : Easy
  * 
  * Day 9 - Number Line Jumps - 26/03/2025
  *
  * 
  * 
*/

function kangaroo(x1, v1, x2, v2) {
  const result1 = [x1];
  const result2 = [x2];

  for(let i = 1; i < 5000; i++) {
    result1.push(i * v1 + result1[0]);
  }

  for(let i = 1; i < 5000; i++) {
    result2.push(i * v2 + result2[0]);
  }

  for(let i = 0; i < result1.length; i++) {
    if(result1[i] === result2[i]) {
      return 'YES'
    }
  }

  return 'NO';
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));


