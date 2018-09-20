function forLoop(array) {
  var myString = "";
  for (i = 0; i < 25; i++) {
    if (i == 1){
      myString = `I am ${i} stange loop.`;
    } else {
    myString = `I am ${i} strange loops.`;
    }
    array.push(myString);
  }
  return array;
}