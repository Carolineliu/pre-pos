function collect_same_elements(collection_a, object_b) {
  var val = collection_a.map(function(collection) {
    return collection.key;
  });
  return val.filter(function(e) {
    return object_b.value.indexOf(e) !== -1;
  });

}
