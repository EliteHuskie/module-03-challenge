// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Constants that store the characters (Upper, Lower, Numeric and Special)
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numericCase = "0123456789";
const specialCase = "~!@#$%^&*?";

// Generate Passowrd function + variable
function generatePassword() {
  var generatedPassword = "";

  // User chooses password length they require between 8 and 128 characters
  var passwordLength = prompt("How many characters would you like your password to contain?", );
  // Checks if Password value entered is null or empty
  if (passwordLength != null && passwordLength !== "") {
  // Ensures Password length is between 8 and 128 characters
    if (passwordLength >= 8 && passwordLength <= 128) {
  // Below Variables are used as a check to see what the User selects for character options
      var selected = false;
      var userSelected = "";

      // User confirms if they want Uppercase characters
      if (confirm("Click OK to confirm including Uppercase characters.")) {
        selected = true;
        userSelected += upperCase; 
      }
      // User confirms if they want Lowercase characters
      if (confirm("Click OK to confirm including Lowercase characters.")) {
        selected = true;
        userSelected += lowerCase;
      }
      // User confirms if they want Numeric characters
      if (confirm("Click OK to confirm including Numeric characters.")) {
        selected = true;
        userSelected += numericCase;
      }
      // User confirms if they want Special characters
      if (confirm("Click OK to confirm including Special characters.")) {
        selected = true;
        userSelected += specialCase;
      }
      // If User doesn't choose any option, the below alert displays
      if (!selected) {
        alert("Please select at least one option for Uppercase, Lowercase, Numeric or Special characters.");
      } else {
      
      // Generation of the random password
        for (i = 0; i < passwordLength ; i++ ) {
          generatedPassword += userSelected[Math.floor(Math.random()*userSelected.length)];
        }
      }
    // If Password length is less than 8 characters, the below alert will display
    } else if (passwordLength < 8) {
      alert("Password length must be at least 8 characters");
    // If Password length is more than 128 characters, the below alert will display
    } else if (passwordLength > 128) {
      alert("Password length must be less than 129 characters");
    }
    // If Password value entered is null or empty, the below alert will display
  } else {
      alert("Please enter a valid password length between 8 and 128 characters");
  }
  // Returns randomly generated password to user  
  return generatedPassword;
}
