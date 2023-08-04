// complete the given function

function palindrome(s){
let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  // Compare the reversed string to the original string.
  return s === reversedString;
}
module.exports = palindrome
