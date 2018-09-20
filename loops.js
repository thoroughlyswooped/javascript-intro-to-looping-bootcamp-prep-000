function forLoop(array) {
  var myString = "";
  for (i = 0; i < 25; i++) {
    myString = `I am ${i} strange loops.`;
    array.push(myString);
  }
  return array;
}