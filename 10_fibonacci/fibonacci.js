const fibonacci = function(ordinal) {
  if (ordinal < 0) return "OOPS";

  let sequence = [0, 1];
  for (let i = 2; i <= ordinal; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[ordinal];
};

// Do not edit below this line
module.exports = fibonacci;
