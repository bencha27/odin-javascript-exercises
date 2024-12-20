const removeFromArray = function(array, ...items) {
  return array.filter((arrayItem) => !items.includes(arrayItem));
};

// Do not edit below this line
module.exports = removeFromArray;
