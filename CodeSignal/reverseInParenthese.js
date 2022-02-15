function solution(inputString) {
  let reg = /\(([^()]*)\)/i;
  let str = reg.exec(inputString)[1].split().reverse().join("");
  let removeParentheseAndContcat = inputString.replace(reg, str[0]);

  console.log(removeParentheseAndContcat);
}

solution("foo(bar(baz))blim");
