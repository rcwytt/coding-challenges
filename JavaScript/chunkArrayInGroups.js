function chunkArrayInGroups(arr, size) {

  var chunkArr = [];

  // greedily iterate over chunks of size in arr and push them
  // onto the result array
  for (i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, i+size));
  }

  return chunkArr;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
