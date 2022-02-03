function solution(inputArray) {
  let longestString = [];

  for (let i = 1; i < inputArray.length; i++) {
    let foundLengthString = inputArray[0].length;

    if (foundLengthString < inputArray[i].length) {
      foundLengthString = inputArray[i].length;
    }
  }

  return longestString;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
