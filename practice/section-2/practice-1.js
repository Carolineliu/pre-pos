function count_same_elements(collection) {
  var result = [];
  var obj = {};
  for (var i = 0; i < collection.length; i++) {
    obj[collection[i]] = obj[collection[i]] + 1 || 1;
  }
  for (var x in obj) {
    result.push({
      key: x,
      count: obj[x]
    });
  }
  return result;
}
