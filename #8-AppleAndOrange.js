/*
  * Link : https://www.hackerrank.com/challenges/apple-and-orange/problem
  * Level : Easy
  * 
  * Day 8 - Apple And Orange - 25/03/2025
  *
  
    Rumah Sam memiliki pohon apel dan pohon jeruk yang menghasilkan buah yang melimpah. Dengan menggunakan informasi yang diberikan di bawah ini, tentukan jumlah apel dan jeruk yang tumbuh di rumah Sam.

    - Daerah merah menunjukkan rumah, di mana s adalah titik awal, dan t adalah titik akhir. Pohon apel berada di sebelah kiri rumah, dan pohon jeruk berada di sebelah kanannya.

    - Asumsikan pohon-pohon tersebut terletak pada satu titik, di mana pohon apel berada di titik a, dan pohon jeruk berada di titik b.

    - Ketika buah jatuh dari pohonnya, buah tersebut akan mendarat pada jarak d satuan dari pohon asalnya sepanjang sumbu x. *Nilai negatif d berarti buah tersebut jatuh pada jarak d satuan ke kiri pohon, dan nilai positif d berarti buah tersebut jatuh pada jarak d satuan ke kanan pohon.*

    - Jika diketahui nilai d untuk m buah apel dan n buah jeruk, tentukan berapa banyak buah apel dan jeruk yang akan jatuh di rumah Sam (yaitu dalam rentang inklusif [s,t])?

    - Misalnya, rumah Sam berada di antara s = 7 dan t = 10. Pohon apel terletak di a = 4 dan jeruk di b = 12. Ada m = 3 apel dan n = 3 jeruk. Apel dilempar apel = [2,3,-4] satuan jarak dari a, dan jeruk = [3,-2,-4] satuan jarak. Menambahkan setiap jarak apel ke posisi pohon, mereka mendarat di [4+2,4+3,4+-4] = [6,7,0]. Jeruk mendarat di [12+3,12+-2,12+-4] = [15,10,8]. Satu apel dan dua jeruk mendarat di rentang inklusif 7 - 10 jadi kita cetak

    s: titik awal
    t: titik akhir
    a: dimana titik pohon apel berada
    b: dimana titik pohon jeruk berada
  * 
  * 
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const ApplesDistanceToThePositionOfTree = apples.map(apple => a + apple);
  const OrangesDistanceToThePositionOfTree = oranges.map(orange => b + orange);

  const numberOfApplesThatFallOnSamHouse = ApplesDistanceToThePositionOfTree.filter(value => value >= s && value <= t).length;
  const numberOfOrangesThatFallOnSamHouse = OrangesDistanceToThePositionOfTree.filter(value => value >= s && value <= t).length

  console.log(numberOfApplesThatFallOnSamHouse);
  console.log(numberOfOrangesThatFallOnSamHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6]); // 1 1
countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4]); // 1 2


