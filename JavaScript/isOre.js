function isInteger(n) {
  // when n === floor(n), n is an integer
  return n === Math.floor(n);
}

function getSumDivisorReciprocals(n) {
  var sumDivisorReciprocals = 0;
  // set of potential divisors are all integers i in [1..n]
  // all i that divide evenly into n are divisors of n
  for(i=1; i <= n; i++) {
    if (n % i == 0) {
      // since the series of reciprocals all have 1 in the numerator,
      // the least common denominator will be n itself.  We can sum
      // the divisors to determine the value of the combined fractions.
      sumDivisorReciprocals += i;
    }
  }
  return sumDivisorReciprocals;
}


function getHarmonicMean(n) {

  //var divisors = getDivisors(n);
  //var sumOfDivReciprocals = 0;
  var sumDivisorReciprocals = 0;
  var nbrDivisors = 0;
  // to avoid issues with JS floating point arithmetic,
  // delay evaluating fractions until computing the
  // harmonic mean
  //
  // set of potential divisors are all integers i in [1..n]
  // all i that divide evenly into n are divisors of n
  for(i=1; i <= n; i++) {
    if (n % i == 0) {
      // since the series of reciprocals all have 1 in the numerator,
      // the greatest common denominator will be n itself.  We can sum
      // the divisors to determine the value of the combined fractions.
      sumDivisorReciprocals += i;
      nbrDivisors++;
    }
  }

  // compute harmonic mean = # divisors / sum of divisor reciprocals
  // formulated here as uncomputed fraction m/n to defer floating point rounding errors
  // further minimizing rounding errors by converting division to multiplication of reciprocal
  return nbrDivisors * (n / sumDivisorReciprocals);

}

function isOre(n) {
  var harmonicMean = getHarmonicMean(n);
  // babel runtime exception using Number.isInteger here,
  // so need to formulate an alternative check
  return isInteger(harmonicMean);
}
