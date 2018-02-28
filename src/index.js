module.exports = function solveEquation(equation) {
  // your implementation
  let splittedEquation = equation.split(' ');
  
  let a = splittedEquation[0];
  let b;
  let c;
  let orderedArr = [];

  if (splittedEquation[3] === '+'){
    b = splittedEquation[4];
  } else {
    b = -splittedEquation[4];
  }
  
  if (splittedEquation[7] === '+'){
    c = splittedEquation[8];
  } else {
    c = -splittedEquation[8];
  }
  let discriminant = b * b - 4 * a * c;
  
  let discriminantRoot, x1, x2;
  
  discriminantRoot = Math.round(Math.sqrt(discriminant));
  
  x1 = (-b + discriminantRoot) / (2 * a);
  x2 = (-b - discriminantRoot) / (2 * a);
  
  if (x2 > x1){
    orderedArr.push(x1);
    orderedArr.push(x2);
  } else {
    orderedArr.push(x2);
    orderedArr.push(x1);
  }
  return orderedArr;
}
