function utopianTree(currentCycle, totalCycles, startingHeight) {
  //n = # of growth cycles

  // base case
  if (currentCycle > totalCycles) {
    return startingHeight;
  }
  // recursive cases
  else {
    // since we alternate two seasons and summer is the second, n will always be even for summer
    if (currentCycle % 2 === 0) {
      return utopianTree(currentCycle + 1, totalCycles, startingHeight + 1);
    }
    // n will always be odd for spring
    else {
      return utopianTree(currentCycle + 1, totalCycles, startingHeight * 2);
    }
  }

}
