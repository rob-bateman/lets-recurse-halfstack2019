var x=0, y=0, i=0, cx=2, cy=2, t=10;

while (i < t) {
  var x2 = x*x - y*y, y2 = 2*x*y;
  console.log(++i, x = x2 + cx, y = y2 + cy);
}