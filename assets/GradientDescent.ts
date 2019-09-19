var x = 0, i = 0, delta = 0.5, t = 10;

while (i < t) {
  var gradient = -Math.cos(x);
  console.log(++i, x = x - gradient*delta);
}