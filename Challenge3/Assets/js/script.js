// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  length: "",
  lowercase: "",
  uppercase: "",
  numeric: "",
  specialCharacters: ""
};
var characterTypes = function() {
 // window prompt asking if you want to include lowercase characters in your password
  passwordCriteria.lowercase = window.prompt("Would you like your password to contain lowercase letters? Please enter yes or no.");
  passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase();
  if (passwordCriteria.lowercase === "yes") {
    window.alert("You have decided to have your password include lowercase letters.");
    passwordCriteria.lowercase = true;
  }
  else if (passwordCriteria.lowercase === "no") {
    window.alert("You have decided not to include lowercase letters in your password");
    passwordCriteria.lowercase = false;
  }
  // window prompt asking if you want to include uppercase characters in your password
  passwordCriteria.uppercase = window.prompt("Would you like your password to contain uppercase letters? Please enter yes or no.");
  passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase();
  if (passwordCriteria.uppercase === "yes") {
    window.alert("You have decided to have your password include uppercase letters.");
    passwordCriteria.uppercase = true;
  }
  else if (passwordCriteria.uppercase === "no") {
    window.alert("You have decided not to include uppercase letters in your password");
    passwordCriteria.uppercase = false;
  }
  // window prompt asking if you want to include numbers in your password
  passwordCriteria.numeric = window.prompt("Would you like your password to contain numbers? Please enter yes or no.");
  passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase();
  if (passwordCriteria.numeric === "yes") {
    window.alert("You have decided to have your password include numbers.");
    passwordCriteria.numeric = true;
  }
  else if (passwordCriteria.numeric === "no") {
    window.alert("You have decided not to include numbers in your password");
    passwordCriteria.numeric = false;
  }
  // window prompt asking if you want to include special characters in your password
  passwordCriteria.specialCharacters = window.prompt("Would you like your password to contain Special Characters? Please enter yes or no.");
  passwordCriteria.specialCharacters = passwordCriteria.specialCharacters.toLowerCase();
  if (passwordCriteria.specialCharacters === "yes") {
    window.alert("You have decided to have your password include Special Characters.");
    passwordCriteria.specialCharacters = true;
  }
  else if (passwordCriteria.specialCharacters === "no") {
    window.alert("You have decided not to include Special Characters in your password");
    passwordCriteria.specialCharacters = false;
  }
  if (passwordCriteria.lowercase === false &&
      passwordCriteria.uppercase === false &&
      passwordCriteria.numeric === false &&
      passwordCriteria.specialCharacters === false){
      window.alert("you need to select atleast one of the options to have a proper password made.");
      characterTypes();
  }
};

var generatePassword = function(){
  // window prompt asking to enter the length you would like your password to be 
  passwordCriteria.length = window.prompt("Please choose the number of characters you would like your password to contain (please note passwords must be between 8 and 128 characters)");
  //changes pass word length string into an integer
  passwordCriteria.length = parseInt(passwordCriteria.length);
  // asks user to enter a valid length if they do not enter a length between 8-128
  if (passwordCriteria.length < 8 || passwordCriteria.length > 128) {
    window.alert("The password length you selected is not a valid option, please try again.");
    generatePassword();
  }
  else {
    window.alert("You have selected for your password to contain " + passwordCriteria.length + " characters.");
  }

  window.alert("What types of characters would you like your password to contain? Please select at least one of the following options");

  characterTypes();

  window.alert("generating your custom password.");
  
  //guidelines for characters used in password
  function createPassword() {
    var characters = "";
    if (passwordCriteria.lowercase === true){
      characters = "abcdefghijklmnopqrstuvwxyz";
    }
    if (passwordCriteria.uppercase === true){
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (passwordCriteria.numeric === true){
      characters = characters + "0123456789";
    }
    if (passwordCriteria.specialCharacters === true){
      characters = characters + "!@#$%^&*()/*-+\}{<>?";
    }
    var result = "";
    var length = passwordCriteria.length;
    for (var i = 0, n = characters.length; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * n));
    }
    window.alert("your new password is " + result);
    return result;
  }
  createPassword();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
