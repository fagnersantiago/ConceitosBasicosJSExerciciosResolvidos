function solution(inputString) {
  let reg = /\(([^\(\)]*)\)/i;

  while (reg.test(inputString)) {
    inputString = inputString.replace(reg, (match, capture) =>
      capture.split("").reverse().join("")
    );
  }

  console.log(inputString);
}

solution("foo(bar(baz))blim");
