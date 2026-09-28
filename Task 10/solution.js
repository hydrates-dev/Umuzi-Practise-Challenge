function printVowels(str) {
  const vowel = "aeiou";
  const strArr = [];

  for(const char of str.toLowerCase()) {
    if(vowel.includes(char)) {
      strArr.push(char);
    }
  }
 return strArr.sort().join("")
}
