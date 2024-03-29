function solution(inputArray) {
  let findLongestStrings = inputArray[0].length;
  for (let i = 1; i < inputArray.length; i++) {
    if (findLongestStrings < inputArray[i].length) {
      findLongestStrings = inputArray[i].length;
    }
  }
  inputArray = inputArray.filter(
    (values) => values.length === findLongestStrings
  );

  return inputArray;
}

console.log(
  solution(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"])
);
