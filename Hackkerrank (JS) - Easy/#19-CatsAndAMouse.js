/*
  * Link : https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
  * Level : Easy
  * 
  * Day 27 - Cats and a mouse - 13/04/2025
  *
  * 
  * 
  * 
*/

function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z)
  const catB = Math.abs(y - z);

  return catA < catB 
    ? 'Cat A'
    : catA > catB
      ? 'Cat B'
      : 'Mouse C'
}

console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C