function count_same_elements(collection) {
  var count = 1;
  var array = [];
  var obj;
  for(var i = 0; i < collection.length; i++){
    if(collection[i] === collection[i+1]){
      count++;
    }else{
      if(collection[i].length > 1){
        obj = {key:collection[i].charAt(0),count:collection[i].charAt(2) - 0};
      }else{
        obj = {key:collection[i],count:count};
      }
      array.push(obj);
      count = 1;
    }
  }
  return array;
}

