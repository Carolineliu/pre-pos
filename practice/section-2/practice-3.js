function count_numbers(str) {
  var SYMBOL = 2;
  if (str.indexOf(":") !== -1 ||
    str.indexOf("-") !== -1 ||
    str.indexOf("[") !== -1) {
    return parseInt(str.slice(SYMBOL));
  } else {
    return 1;
  }

}

function count_same_elements(collection) {
  var result = [];
  var obj = {};
  for (var i = 0; i < collection.length; i++) {
    obj[collection[i].charAt(0)] = obj[collection[i].charAt(0)] + count_numbers(collection[i]) || count_numbers(collection[i]);
  }
  for (var x in obj) {
    result.push({
      name: x,
      summary: obj[x]
    });
  }
  return result;
}
