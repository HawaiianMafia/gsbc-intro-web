
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (100 - 1) + 1); //The maximum is exclusive and the minimum is inclusive
}
