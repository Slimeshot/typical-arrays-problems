
exports.min = function min (array) {
  let result;

  if (array === undefined || array[0] === undefined) {
    return 0;
  }
  array.forEach(item => {
    if (!result || item < result) {
      result = item;
    }
  });
  return result;
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined) {
    return 0;
  }
  let result;

  array.forEach(item => {
    if (!result || item > result) {
      result = item;
    }
  });
  return result;
}

exports.avg = function avg (array) {
  if (array === undefined || array[0] === undefined) {
    return 0;
  }
  let result = 0;
  let num;
  array.forEach((item, index) => {
    result += item; 
    num = index;
  });
  
  
  return (result/(num + 1));
}
