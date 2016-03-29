function titleCase(str) {

  // split sentence into an array of words
  var strArr = str.split(" ");

  // map the array elements with a callback function to set the
  // first letter of each word to upper case and the remainder of the
  // word to lower case
  var formattedStrArr = strArr.map(function(currentValue) {
                                     return (currentValue[0].toUpperCase() +
                                             currentValue.slice(1).toLowerCase());
                                   });

  return formattedStrArr.join(" ");
}
