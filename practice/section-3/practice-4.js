function count_numbers(str) {
  if (str.indexOf("-") !== -1) {
    return parseInt(str.slice("2"));
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
      key: x,
      count: obj[x]
    });
  }
  return result;
}

function create_updated_collection(collection_a, object_b) {
  var collection=count_same_elements(collection_a);
  for (var i in collection) {
    if (object_b.value.indexOf(collection[i].key) !== -1) {
      collection[i].count = collection[i].count - Math.floor(collection[i].count / 3);

    }
  }
  return collection;
}
