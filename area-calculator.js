function calculateRectangleArea(length, width) {
  return (length < 0 || width < 0) ? undefined : length * width;
}

function calculateTriangleArea(base, height) {
  return (base < 0 || height < 0) ? undefined : base * height / 2;
}

function calculateCircleArea(radius) {
  return (radius < 0) ? undefined : Math.PI * radius * radius;
}