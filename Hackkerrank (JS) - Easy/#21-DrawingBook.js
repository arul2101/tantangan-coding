/*
  * Link : https://www.hackerrank.com/challenges/drawing-book/problem
  * Level : Easy
  * 
  * Day 29 - Drawing Book - 15/04/2025
  *
  * 
  * 
  * 
*/

function pageCount(n, p) {
  if(Math.abs(n - p) === 1) {
    if(n % 2 !== 0) {
      return 0
    }
  }

  let fromFirstPage = 0;
  let fromLastPage = 0;

  for(let i = 1; i < p; i+=2) {
    fromFirstPage += 1;
  }

  let firstValue = n;

  if(firstValue % 2 !== 0) {
    firstValue -= 1;
  }

  for(let i = firstValue; i > p; i-=2) {
    fromLastPage += 1;
  }

  return fromFirstPage < fromLastPage ? fromFirstPage : fromLastPage
}

console.log(pageCount(6, 2)) //1
console.log(pageCount(5, 4)); //0
console.log(pageCount(10, 7)) //2
console.log(pageCount(7, 4)) //1