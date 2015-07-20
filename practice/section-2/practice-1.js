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
