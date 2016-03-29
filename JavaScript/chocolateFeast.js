function chocolateFeast(n, c, m) {
  //n = Money available
  //c = Cost of each chocolate in money
  //m = Nbr of used wrappers to redeem a free chocolate

  // chocolates that could be purchased with N dollars
  var totalWrappers = Math.floor(n / c);

  // total unused wrappers available for exchange
  var unused = totalWrappers;

  // nbr of additional chocolates acquired by exchange
  var exchanged = 0;

  // nbr of wrappers used in completing exchange
  var used = 0;

  // have the ability to complete an exchange
  while (unused >= m) {

      // determine additional chocolates acquired for completing an exchange
      exchanged = Math.floor(unused / m);

      // adding free chocolates from exchange to total
      totalWrappers += exchanged;

      // determine how many wrappers were used up in the exchange
      used = exchanged * m;

      // remaining unused wrappers to exchange is number we had less the number we used up in the exchange
      // plus the number of new wrappers received in the exchange
      unused = unused - used + exchanged;
  }

  console.log(totalWrappers);

}
