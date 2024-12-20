const palindromes = function (string) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  let lowercase = string.toLowerCase();
  let array = lowercase.split("").filter(char => alphanumeric.includes(char));
  let filtered = array.join("");
  let reverse = array.reverse().join("");
  if (filtered === reverse) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
