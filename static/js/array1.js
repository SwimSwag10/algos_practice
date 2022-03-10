
// Array.pop() & Array.push()
// arrays grow: Array.length == lastIdx-1
// if-else statements
// for /while loops
// arrays can contain different types
// arrays are objects, passed by ref (ptr)

var myArr = [];
myArr.push(1,-2,0,8,5,10,7)
secondArr = [];
secondArr.push("okay")

// Push Front
listArr = secondArr + "," + myArr
console.log(listArr);
//okay,1,-2,0,8,5,10,7

// Pop Front
var num = myArr[0];
for (var i=0; i<myArr.length; i++) {
  myArr[i] = myArr[i+1]
  if (myArr[i+1] == myArr.length) {
    myArr.pop();
    break;
  }
}
console.log(myArr, num);
//[ -2, 0, 8, 5, 10, 7 ] 1

// Insert At
var insertNum = 7;
var index = 3;
myArr[index] = insertNum;
console.log(myArr);

//Min to Front
var arr = [4,2,1,3,5];
newArr = [];
for (var i=0; i<arr.length; i++) {
  num = arr[i];
  if (num < arr[i+1]) {
    if (newArr[0] == "[]") {
      newArr += num;
      break
    }
    newArr += "," + num;
  }
}
console.log(newArr)