function truncateString(str, num) {

  var result = "";
  var maxLength = num;
  const ellipsis = "...";

  // when the maximum length is greater than the length of the str, there will
  // be no truncation
  if (maxLength >= str.length) {
    result = str;
  }
  else {

    // when the maximum length allows for the ellipsis, include the ellipsis
    // in determining where to truncate
    if (maxLength > ellipsis.length) {
      maxLength -= ellipsis.length;
    }

    // format the truncated string
    result = str.slice(0, maxLength) + ellipsis;

  }

  return result;

}
