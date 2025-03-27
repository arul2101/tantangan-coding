/*
  * Link : https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
  * Level : Easy
  * 
  * Day 1 - Diagonal Difference - 18/03/2025
  *
      - Diberikan sebuah matriks persegi, hitunglah selisih mutlak antara jumlah diagonal-diagonalnya. Misalnya, matriks persegi arr ditunjukkan di bawah ini:

      1 2 3
      4 5 6
      9 8 9
      
      - diagonal kiri ke kanan = 1 + 5 + 9 = 15
      - diagonal kanan ke kiri = 3 + 5 + 9 = 17
      
      selisih mutlaknya adalah |15 - 17| = 2.

      Deskripsi Fungsi :

      Lengkapi Fungsi diagonalDifference dengan parameter berikut:
      - int arr[n][m]: a 2-D array of integers

      Return : 
      - int: perbedaan mutlak dalam jumlah sepanjang diagonal

      Input Format
      - Baris pertama berisi bilangan bulat tunggal, n, jumlah baris dan kolom dalam matriks persegi arr.
      - Setiap n baris berikutnya menggambarkan baris, arr[i], dan terdiri dari n bilangan bulat yang dipisahkan spasi arr[i][j].

  * 
  * 
*/

function diagonalDifference(arr) {
  const leftToRight = [];
  const rightToLeft = [];

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(j === i) {
        leftToRight.push(arr[i][j])
      }

      if((j === arr[i].length - i - 1)) {
        rightToLeft.push(arr[i][j]);
      }
    }
  }

  const resultLeftToRight = leftToRight.reduce((prev, curr) => prev + curr, 0);
  const resultRightToLeft = rightToLeft.reduce((prev, curr) => prev + curr, 0);

  let finalResult = resultLeftToRight - resultRightToLeft;

  if(finalResult < 0) {
    finalResult *= -1;
  }

  return finalResult
}

console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]));