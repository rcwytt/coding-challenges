function rot13(str) { // LBH QVQ VG!

  var decodeStr = "";
  const rotVal = 13;
  const intervalSize = 26;
  var offset = 0;
  const minCharCode = 65;
  const maxCharCode = 90;

  for (i = 0; i < str.length; i++) {

    offset = 0;

    // only rotate alphabet characters
    if (str.charCodeAt(i) >= minCharCode && str.charCodeAt(i) <= maxCharCode) {

      // rotation needs to wrap around to the end of the alphabet
      if ( (str.charCodeAt(i) - rotVal) < minCharCode) {
        offset = intervalSize;
      }
       // add decoded character to the decodeStr
       decodeStr += String.fromCharCode(str.charCodeAt(i) - rotVal + offset);
    }
    // just append non-alphabet characters
    else {
      decodeStr += str[i];
    }



  }

  return decodeStr;

}

// Change the inputs below to test
//rot13("SERR PBQR PNZC");
