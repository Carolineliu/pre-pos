function count_same_elements(collection) {
  var count = 1;
  var array = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i] === collection[i+1]){
      count++;
    }else{
      var obj = {key:collection[i],count:count};
      array.push(obj);
      count = 1;
    }
  }
  return array;
}
function rightres(collection_a,object_b){
  for(var i = 0; i < object_b.value.length; i++){
    if(collection_a.key === object_b.value[i]){
      if(collection_a.count/3 > 0)
        collection_a.count= collection_a.count-Math.floor(collection_a.count/3);
    }
  }
  var obj={key:collection_a.key,count:collection_a.count};
  return  obj;
}


function create_updated_collection(collection_a, object_b) {
  var c = count_same_elements(collection_a);
  var array = [];
  for(var i = 0; i < c.length; i++){
    array.push(rightres(c[i],object_b)) ;
  }
  return array;
}





