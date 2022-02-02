function solution(inputArray) {
  let longestString = [];
  let string1 = "";
  let string2 = "";

  for (let i = 0; i < inputArray.length; i++) {
    string1 = inputArray[i];
    string2 = inputArray[i + 1];

    if ((string1 > string2 && string2 < string1) || string2 === undefined)
      longestString.push(string1);
  }

  return longestString;
}

console.log(
  solution(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"])
);
