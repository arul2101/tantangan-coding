/*
  * Link : https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
  * Level : Easy
  * 
  * Day 2 - Plus Minus - 19/03/2025
  *
      - Diberikan sebuah array bilangan bulat, hitunglah rasio elemen-elemennya yaitu positif, negatif dan nol. Cetak nilai desimal setiap pecahan pada baris baru dengan 6 tempat setelah desimal.

  * 
  * 
*/

function plusMinus(arr) {
  // penyebut
  const denominator = arr.length;
  const positive = [];
  const negative = [];
  const zero = [];
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zero.push(arr[i]);
    }

    if(arr[i] < 0) {
      negative.push(arr[i])
    }

    if(arr[i] > 0) {
      positive.push(arr[i]);
    }
  }

  const decimalOfPositive = (positive.length / denominator).toFixed(6);
  const decimalOfNegative = (negative.length / denominator).toFixed(6);
  const decimalOfZero = (zero.length / denominator).toFixed(6);

  result.push(decimalOfPositive, decimalOfNegative, decimalOfZero);

  result.forEach(value => {
    console.log(value);
  })
}

plusMinus([-4, 3, -9, 0, 4, 1]);