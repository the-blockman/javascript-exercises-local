const repeatString = function (string, num) {
  if (num >= 0) {
    let i = 0;
    let result = "";

    while (i < num) {
      result += string;
      i++;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
