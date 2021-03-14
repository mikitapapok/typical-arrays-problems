
exports.min = function min(array) {
  if (!array || array.length === 0) {
      return 0;
  } else {
      let minFromArr = Math.min(...array);
      return minFromArr;
  }
};

exports.max = function max(array) {
  if (!array || array.length === 0) {
      return 0;
  } else {
      let maxFromArr = Math.max(...array);
      return maxFromArr;
  }
};

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
      return 0;
  } else {
      return array.reduce((firstElement, secondElement) => firstElement + secondElement) / array.length;
  }
};