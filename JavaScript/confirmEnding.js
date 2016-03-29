function confirmEnding(str, target) {

  return str.substr(-target.length).toLowerCase() === target.toLowerCase();

}
