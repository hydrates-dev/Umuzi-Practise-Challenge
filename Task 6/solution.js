function maxNum(num1 , num2, num3) {
  if(num1 > num2 && num1 > num3) {
    return num1;
  }else if(num1 > num3 && num1 < num2) {
    return num2
  }else if(num1 < num2 && num3 < num2) {
    return num2
  }

  return num3
}

//bonus
 
function maxNumber(...numbers) {
  let max = numbers[0];

  for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
