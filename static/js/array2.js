var arr = [1,4,6,3,9,-4,0];
var arr2 = [14,2,3,10,-14,0];

//Reverse
function reverse() {
  var newArr = [];
  for (var i=0; i<arr.length; i++) {
    newArr += arr[arr.length-1-i];
  }
  return console.log(`[${newArr}]`);
}
reverse();

//Rotate
num = 10;
function rotateArr(arr, moveBy) {
  var actualMovementsNeeded;
  if (moveBy > 0) {
      actualMovementsNeeded = moveBy % arr.length;
  } else {
      actualMovementsNeeded = Math.abs(moveBy) % arr.length;
  }
  if (moveBy > 0) {
      for (var i = 0; i < actualMovementsNeeded; i++) {
          var temp = arr[arr.length - 1];
          for (var k = arr.length - 2; k >= 0; k--) {
              arr[k+1] = arr[k];
          }
          arr[0] = temp;
      }
  } else {
      for (var i = 0; i < actualMovementsNeeded; i++) {
          var temp = arr[0];
          for (var k = 1; k < arr.length; k++) {
              arr[k-1] = arr[k];
          }
          arr[arr.length - 1] = temp;
      }
  }
  return console.log(`[${arr}]`);
}
rotateArr(arr, num);

//Filter
min = -10;
max = 1;
function filterRange(arr, minVal, maxVal) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < minVal || arr[i] > maxVal) {
          for (var k = i+1; k < arr.length; k++) {
              arr[k-1] = arr[k];
          }
          arr.length--;
          i--;
      }
  }
  return console.log(`[${arr}]`);
}
filterRange(arr,min,max)

//Concat
function concatArrays(arr1, arr2) {
  var newArr = [];
  var curInd = 0;
  for (var i = 0; i < arr1.length; i++) {
      newArr[curInd] = arr1[i];
      curInd++;
  }
  for (var i = 0; i < arr2.length; i++) {
      newArr[curInd] = arr2[i];
      curInd++;
  }
  return console.log(`[${newArr}]`);
}
concatArrays(arr,arr2);