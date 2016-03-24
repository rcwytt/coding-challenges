function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

function getValidatedInput(n) {

  // consider input not a number by default
  var validatedInput = false;

  // validate and normalize input
  if (isNumber(n)) {

    // no flags smaller than 7x7
    const minInput = 7;
    // round decimals up to next whole number
    validatedInput = (n < minInput) ? minInput : Math.ceil(n);

  }

  return validatedInput;

}

function unionJack(n) {
  const flagSize = getValidatedInput(n);
  var uj = "";

  // js will interpret any non-false value as true
  if (flagSize) {

    const barChar = "X";
    const bgChar = "-";

    // since uj is symmetric across the x and y axes, this
    // algorithm will seek to produce the first quadrant
    // and fold it across y and then x to produce the output
    // by leveraging the following relations:
    // 1. Q1 === Q4 && Q2 === Q3
    // 2. A given line in Q2 is reverse of same line in Q1

    // consider xCross the x axis
    // consider yCross the y axis
    // determine form of the central cross composed of both axes
    // sadly, codewars does not support the repeat function
    // nor the fill function
    //var xCross = barChar.repeat(flagSize);
    // since the number of join points in an array of
    // length n is n-1, we just join an empty array with
    // the barChar to create a string of length n
    var xCross = new Array(flagSize+1).join(barChar);
    console.log(xCross);
    var yCross = barChar;
    var q1EndPoint = Math.floor(flagSize/2);

    // NxN flags where N is even will have double-sized crosses
    if (flagSize % 2 == 0) {

      xCross += ("\n" + xCross);
      yCross += barChar;
      // Need to decrement the end point to fully exclude y axis
      q1EndPoint--;

    }

    var currLine = "";

    // from top to bottom, iterate to create rows of first quadrant
    // Note: excluding the central cross in iteration
    for (i=0; i < q1EndPoint; i++) {

      currLine = "";

      // from left to right, iterate to create columns of first quadrant
      // Note: excluding vertical cross in iteration
      for (q1StartPoint = 0; q1StartPoint < q1EndPoint; q1StartPoint++) {
        currLine += (q1StartPoint === i) ? barChar : bgChar;
      }

      // take current line in Q1, append the y-axis, then
      // flip to get rest of current line in Q2
      uj += (currLine + yCross + currLine.reverse() + "\n");

    }

    uj += xCross + uj.reverse();

  }
  else {
    uj = false;
  }

  return uj;

}
