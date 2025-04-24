/*
  * Link : https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
  * Level : Easy
  * 
  * Day 30 - Designer PDF Viewer - 16/04/2025
  *
  * 
  * 
  * 
*/

function designerPdfViewer(h, word) {
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const valueOfIndex = [];

  for(let i = 0; i < word.length; i++) {
    for(let j = 0; j < alphabets.length; j++) {
      if(word[i] === alphabets[j]) {
        valueOfIndex.push(h[j]);
      }
    }
  }


  return Math.max(...valueOfIndex) * word.length;
}

console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 'abc')) //9