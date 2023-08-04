// complete the given function

function palindrome(s){
let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i].toLowerCase();
  }

  // Compare the reversed string to the original string, ignoring case.
  return s.toLowerCase() === reversedString;
}
module.exports = palindrome
