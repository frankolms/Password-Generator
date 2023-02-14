// Assignment code here
//Arrays to store the characters used to generate the password
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
[
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "=",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//function to generate the password
var generatePassword = function () {
  var howLong = prompt(
    "How long would you like the password to be? Please choose 8 - 128 characters"
  );
  //if statement to make sure the proper length parameter is input
  if (howLong < 8 || howLong > 128 || isNaN(howLong)) {
    alert(
      "Your input does not match the character length criteria. Please refresh and try again."
    );
  } else {
    var upperCase = confirm("Would you like to include Upper Case letters?");
    var lowerCase = confirm("Would you like to include Lower Case letters?");
    var specialChar = confirm("Would you like to include Special Characters?");
    var num = confirm("Would you like to include numbers?");
  }
  //object to store users input values
  var usersChoices = {
    howLong,
    upperCase,
    lowerCase,
    specialChar,
    num,
  };

  console.log(usersChoices);
  //if statements to account for all possibilities of password parameter choices by the user
  if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === false &&
    usersChoices.num === false
  ) {
    alert("You must choose at least one parameter. Please try again.");
  }

  var userChoice = [];

  if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === false &&
    usersChoices.num === false
  ) {
    userChoice.push(...upperCaseLetters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === false &&
    usersChoices.num === false
  ) {
    userChoice.push(...upperCaseLetters, ...lowerCaseLetters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === true &&
    usersChoices.num === false
  ) {
    userChoice.push(
      ...upperCaseLetters,
      ...lowerCaseLetters,
      ...specCharacters
    );
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === true &&
    usersChoices.num === true
  ) {
    userChoice.push(
      ...upperCaseLetters,
      ...lowerCaseLetters,
      ...specCharacters,
      ...numbers
    );
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === false &&
    usersChoices.num === false
  ) {
    userChoice.push(...lowerCaseLetters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === true &&
    usersChoices.num === false
  ) {
    userChoice.push(...lowerCaseLetters, ...specCharacters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === true &&
    usersChoices.num === true
  ) {
    userChoice.push(...lowerCaseLetters, ...specCharacters, ...numbers);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === true &&
    usersChoices.num === false
  ) {
    userChoice.push(...upperCaseLetters, ...specCharacters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === false &&
    usersChoices.num === true
  ) {
    userChoice.push(...upperCaseLetters, ...numbers);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === true &&
    usersChoices.specialChar === false &&
    usersChoices.num === true
  ) {
    userChoice.push(...lowerCaseLetters, ...numbers);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === true &&
    usersChoices.num === true
  ) {
    userChoice.push(...specCharacters, ...numbers);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === false &&
    usersChoices.num === true
  ) {
    userChoice.push(...numbers);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === false &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === true &&
    usersChoices.num === false
  ) {
    userChoice.push(...specCharacters);
    console.log(userChoice);
  } else if (
    usersChoices.upperCase === true &&
    usersChoices.lowerCase === false &&
    usersChoices.specialChar === true &&
    usersChoices.num === true
  ) {
    userChoice.push(...upperCaseLetters, ...specCharacters, ...numbers);
    console.log(userChoice);
  }
  //loop to generate the password based on the users inputs
  var result = " ";
  var finalPassword = userChoice.length;
  for (var i = 0; i < usersChoices.howLong; i++) {
    result += userChoice[Math.floor(Math.random() * finalPassword)];
  }

  return result;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
