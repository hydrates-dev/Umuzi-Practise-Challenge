function charMarch(strOne, strTwo) {
  const match = []
  for(const char of strOne.toLowerCase()) {
    if(strTwo.toLowerCase().includes(char)) {
      match.push(char)
    }
  }
  return `Common letters: ${match.join(",")}`
}
