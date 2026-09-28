function wantThree(num1 , num2) {
  const sum = num1 + num2;
  const three = 3;
  if((num1 === 3 || num2 === 3) && sum.toString().includes(three.toString())) {
    return true;
  }
  
  return false;
}

