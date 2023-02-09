// Assignment code here
var howLong = prompt(
  "How long would you like the password to be? Please choose 8 - 128 characters"
);

var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

var numbers = "0123456789";

var specCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function (num) {
  var upperCase = confirm("Would you like to include Upper Case letters?");
  var lowerCase = confirm("Would you like to include Lower Case letters?");
  var specialChar = confirm("Would you like to include Special Characters?");
  var num = confirm("Would you like to include numbers?");

  if (
    upperCase === false &&
    lowerCase === false &&
    specialChar === false &&
    num === false
  ) {
    alert(
      "You must choose at least one parameter. Please refresh and try again."
    );
  }

  if (howLong < 8 || howLong > 128) {
    alert(
      "Your input does not match the character length criteria. Please refresh and try again."
    );
  }

  var result = " ";
  var finalPassword = upperCaseLetters.length;
  for (var i = 0; i < howLong; i++) {
    result += upperCaseLetters.charAt(
      Math.floor(Math.random() * finalPassword)
    );
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

console.log(generatePassword(howLong));
