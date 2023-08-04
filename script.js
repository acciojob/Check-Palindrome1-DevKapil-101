// complete the given function

function palindrome(str){
const rStr = str.reverse();
	if (rStr === str) return true;
	else return false;
}
module.exports = palindrome
