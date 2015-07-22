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
function create_updated_collection(collection_a, object_b) {
  var collection=count_same_elements(collection_a);
  for (var i in collection) {
    if (object_b.value.indexOf(collection[i].key) !== -1) {
      collection[i].count = collection[i].count - Math.floor(collection[i].count / 3);

    }
  }
  return collection;
}
