function areaOfTriangle(a,b,c) {
  //semiperimeter of a triangle
  const s = (a + b + c)/2;

  //Heron's formular
  return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
