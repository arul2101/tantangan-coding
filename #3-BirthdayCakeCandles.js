/*
  * Link : https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
  * Level : Easy
  * 
  * Day 3 - Birthday Cake Candles - 20/03/2025
  *
      - Anda bertugas membuat kue ulang tahun anak. Kue tersebut akan berisi satu lilin untuk setiap tahun usia total anak. Anak hanya boleh meniup lilin yang paling tinggi. Tugas Anda adalah menghitung berapa banyak lilin yang paling tinggi.

  * 
  * 
*/

function birthdayCakeCandles(candles) {
  const maxValue = Math.max(...candles);
  let maxValueCount = 0;

  for(let i = 0; i < candles.length; i++) {
    if(candles[i] === maxValue) {
      maxValueCount += 1;
    }
  }

  return maxValueCount;
}

console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));