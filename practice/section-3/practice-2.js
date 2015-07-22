function create_updated_collection(collection_a, object_b) {
  for (var i in collection_a) {
    if (object_b.value.indexOf(collection_a[i]) !== -1) {
      if (collection_a[i] / 3 > 0) {
        collection_a.count = collection_a.count - Math.floor(collection_a.count / 3);
      }
    }
  }
  return collection_a;
}
