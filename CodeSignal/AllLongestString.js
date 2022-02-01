function solution(inputArray) {
  let longestString = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      longestString.push(inputArray[i]);
    }
  }

  return longestString;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
