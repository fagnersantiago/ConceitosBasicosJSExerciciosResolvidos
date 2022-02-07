function solution(s1, s2) {
  let countCommonString = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) {
      countCommonString++;
      console.log(s2.indexOf(s1[i]));
    }
    // console.log(s2.indexOf(s1[i + 1]));
  }

  return countCommonString;
}
console.log(solution("aabcc", "adcaa"));
