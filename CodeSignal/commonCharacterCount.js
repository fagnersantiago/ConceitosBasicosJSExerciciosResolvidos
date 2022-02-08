function solution(s1, s2) {
  let countCommonString = 0;
  s1 = s1.split("");
  s2 = s2.split("");

  for (let value of s1) {
    if (s2.indexOf(value) !== -1) {
      countCommonString++;
      s2.splice(s2.indexOf(value), 1);
    }
  }

  return countCommonString;
}
console.log(solution("abca", "xyzbac"));
