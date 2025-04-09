/*
  * Link : https://www.hackerrank.com/challenges/between-two-sets/problem
  * Level : Easy
  * 
  * Day 20 - Between Two Sets - 06/04/2025
  *
  * 
  * 
  * 
Akan ada dua array bilangan bulat. Tentukan semua bilangan bulat yang memenuhi dua kondisi berikut:

1. Elemen-elemen array pertama adalah semua faktor bilangan bulat yang dipertimbangkan
2. Bilangan bulat yang dipertimbangkan adalah faktor dari semua elemen array kedua

Angka-angka ini disebut berada di antara dua array. Tentukan berapa banyak angka seperti itu yang ada.

*/

function getTotalX(a, b) {
  // Write your code here
  const numbers = [];
  const c = [];
  const result = [];

  for(let j = a[a.length - 1]; j <= b[0]; j++) {
    numbers.push(j);
    let temp = j;
    for(let i = 0; i < a.length; i++) {
      if(temp % a[i] !== 0) {
        temp = 0;
      }
    }


    if(temp) {
      c.push(temp);
    }
  }

  for(let i = 0; i < c.length; i++) {
    let temp = c[i];

    for(let j = 0; j < b.length; j++) {
      if(b[j] % temp !== 0) {
        temp = 0;
      }
    }

    if(temp) {
      result.push(temp);
    }
  }

  return result.length;
}

console.log(getTotalX([2,6], [24,36]));






