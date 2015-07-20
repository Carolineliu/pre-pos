function rightres(collection_a,object_b){
  for(var i = 0; i < object_b.value.length; i++){
    if(collection_a.key === object_b.value[i]){
      if(collection_a.count/3 > 0)
      collection_a.count= collection_a.count-Math.floor(collection_a.count/3);
    }
  }
  var obj = {key:collection_a.key,count:collection_a.count};
  return  obj;
}


function create_updated_collection(collection_a, object_b) {
  var array = [];
  for(var i = 0; i < collection_a.length; i++){
    array.push(rightres(collection_a[i],object_b)) ;
  }
  return array;
}
