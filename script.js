// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log("cow");

// question 3
var petArray = ["cat", "cow", "dog"];
petArray.push("sheep");
console.log(petArray);

// question 4
var petArray = ["cat", "cow", "dog", "sheep"];
console.log(petArray.length);

// question 5
var catObject = {
  name: "Oreo",
  colour: "black",
  age: 5
};

// question 6
console.log(catObject.age);

// question 7
var catArray = [
  {
    name: "Oreo",
    colour: "black",
    age: 5
  }
];

// question 8
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i].name);
  console.log(catArray[i].colour);
  console.log(catArray[i].age);
}

// question 9
function logToConsole(anArgument) {
  console.log(anArgument);
}

// question 10
function logToConsole(anArgument) {
  console.log("donkey " + anArgument);
}
