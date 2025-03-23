/*
  * Link : https://www.hackerrank.com/challenges/staircase/problem
  * Level : Easy
  * 
  * Day 4 - Staircase - 21/03/2025
  *
      #
    ##
  ###
####

  * 
  * 
*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n-i) + "#".repeat(i))
  }    
}

staircase(4);