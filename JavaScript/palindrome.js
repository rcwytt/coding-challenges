function palindrome(str) {
  // Good luck!

  // RegEx to filter out non-alpha-numeric characters
  const regExFilter = /[^a-zA-Z0-9]/gi;
  // Filter the input string and convert case so all characters are uniform
  var filteredStr = str.replace(regExFilter, "").toLowerCase();

  // Determine the midpoint of the string.  The head and tail of the string should
  // mirror each other when folded over this point.
  var palHinge = Math.floor(filteredStr.length/2);
  // When the length of the string is an odd number, we start the tail by skipping
  // over the middle character because we are folding on that character.  When the
  // length is even, we are folding on the space between the two middlemost characters.
  const filteredStrTailStart = (filteredStr.length % 2 === 0) ? palHinge : palHinge + 1;

  var filteredStrHead = filteredStr.slice(0, palHinge);
  // reverse the tail end of the filteredStr so a simple equality check can be used to
  // confirm whether we have a palindrome
  var filteredStrTail = filteredStr.slice(filteredStrTailStart).split("").reverse().join("");

  return filteredStrHead === filteredStrTail;

};
