function largestOfFour(arr) {

  // using standard iteration to reduce each subarray
  /*
  for(i=0; i < arr.length; i++) {
    arr[i] = arr[i].reduce(function(previousValue, currentValue) {
                 return Math.max(previousValue, currentValue);
               });
  }

  return arr;
  */

  // using map to iterate the array and reduce each subarray
  var largestOfFourArr = arr.map(function(currSubArray) {
                                   return currSubArray.reduce(function(previousValue, currentValue) {
                                                                return Math.max(previousValue, currentValue);
                                                              });
                                 });

  return largestOfFourArr;
}
