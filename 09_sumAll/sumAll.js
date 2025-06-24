const sumAll = function (a, b) {
  let result = 0;
  if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      result += i;
    }
  } else {
    result = "ERROR";
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
