var x = 0, i = 0, a = 2, t = 10;

while (i < t) {
  console.log(++i, x = (x + a) % t);
}