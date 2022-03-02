function solution(inputString) {
  const isPolindrome = inputString.split("");
  let result = isPolindrome.slice(0, isPolindrome.length / 2);
  let result2 = isPolindrome.slice(isPolindrome.length / 2);
  let joi1 = result.join("");
  let part1 = joi1.slice(0, 2);
  let partFinal = joi1.slice(-2).split(" ").reverse().join(" ");
  let joi = result2.join("");
  let polindrome = partFinal + joi + part1;

  let verifyIfIsPolindrome = part1 + joi + partFinal;
  if (verifyIfIsPolindrome == polindrome) {
    return true;
  } else {
    return false;
  }
}

solution("abbcabb");

//   abba;
//   abbcabb;
//   abbcbba;
//   zyyzzzzz;
//   zyzzzzyz;
//   zaa;
//   aza;
