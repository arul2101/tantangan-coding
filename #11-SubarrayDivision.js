/*
  * Link : https://www.hackerrank.com/challenges/the-birthday-bar/problem
  * Level : Easy
  * 
  * Day 11 - Subarray Division - 28/03/2025
  *
  * 
  * 
*/

function birthday(s, d, m) {
  let count = 0;
  let temp = 0;

  if(s.length === 1 && m === 1) {
    count = s[0] === d ? count + 1 : 0;
  } else {
    for(let i = 0; i < s.length; i++) {
      temp = s[i];
      for(let j = i + 1; j < m + i; j++) {
        temp += s[j];
      }

      if(temp === d) {
        count += 1;
      }
    }
  }
  

  return count;
}

console.log(birthday([1,2,1,3,2], 3, 2));
console.log(birthday([1,1,1,1,1,1], 3, 2));
console.log(birthday([4], 4, 1));




