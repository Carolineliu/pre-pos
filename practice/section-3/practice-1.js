function same_key(key, object_b ){
  for(var i = 0; i < object_b.value.length; i ++){
    if(key === object_b.value[i])
      return key;

  }
}
function collect_same_elements(collection_a, object_b) {
  var array = [];
  for(var x = 0; x < collection_a.length; x ++){
    var key = same_key(collection_a[x].key,object_b);
    if(key){
      array.push(key);
    }

  }
  return array;
}
