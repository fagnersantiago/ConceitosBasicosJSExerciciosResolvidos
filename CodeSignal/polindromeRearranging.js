function solution(inputString) {
  //   const isPolindrome = inputString.split("").reverse().join("");
  //   aabb;
  //   abba;
  //   abbcabb;
  //   abbcbba;
  //   zyyzzzzz;
  //   zyzzzzyz;
  //   zaa;
  //   aza;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.length === 4 && inputString[i] !== inputString[i + 1]) {
      inputString = inputString[i + 1] + inputString[i];

      // console.log(inputString);
    }
  }
  return console.log(inputString);
}

solution("aabb");
