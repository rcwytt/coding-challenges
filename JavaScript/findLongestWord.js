function findLongestWord(str) {

  //split the input sentence into an array of words
  var words = str.split(" ");
  // reduce the array of words into a single value representing
  // the longest word in the array.  The callback function returns the
  // largest of the currently known max length and the length of the current
  // value in the array as reduce iterates over the array
  var maxLength = words.reduce( function(previousValue, currentValue) {
                                  return Math.max(previousValue, currentValue.length);
                                }
                              , 0);
  return maxLength;
}
