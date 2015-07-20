function count_same_elements(collection) {
  var count = 0;
  var array = [];

  for (var i = 0; i < collection.length - 1; i++) {
    if (collection[i].charAt(0) === collection[i + 1].charAt(0)) {
      if (collection[i].length === 1) {
        count = count + 1;
      } else if ( collection[i].length >= 4){
        count = count + (collection[i].substring(2, collection[i].indexOf("]")) - 0);
      } else {
        count = count + collection[i].charAt(2) - 0;
      }
    }
    else {
      if (count === 0) {
        obj = {
          name: collection[i].charAt(0),
          summary: collection[i].charAt(2) - 0
        };
        array.push(obj);
      }
      else {

        var obj = {
          name: collection[i].charAt(0),
          summary: count+1
        };
        array.push(obj);
        count = 0;
      }
    }
  }
  if (collection[collection.length - 2].charAt(0) != collection[collection.length - 1].charAt(0)) {
    array.push({
      name: collection[collection.length - 1].charAt(0),
      summary: collection[collection.length - 1].charAt(2) - 0
    });
  }
  return array;
}
