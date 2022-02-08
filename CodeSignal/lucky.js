function solution(n) {
  let string = String(n);
  let result = string.split("", 2);

  for (let i = 0; i < result.length; i++) {
    if (parseInt(`${result[0]}`) + parseInt(`${result[i + 1]}`)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(solution(10));
