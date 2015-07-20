function same_key(key, collection_b ){
  for(var i = 0; i < collection_b.length; i ++){
    if(key === collection_b[i]){
      return key;
    }
  }
}

function collect_same_elements(collection_a, collection_b) {
  var array = [];
  for(var x = 0; x < collection_a.length; x ++){
    var key = same_key(collection_a[x],collection_b);

    if(key){
      array.push(key);
    }

  }
  return array;
}
