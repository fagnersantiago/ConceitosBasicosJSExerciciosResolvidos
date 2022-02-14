function solution(inputString) {
  let reg = /\(([^()]*)\)/i;
  let str = reg.exec(inputString)[1].split("").reverse().join("");

  let removeParentheseAndContcat = inputString.replace(/\s*\(.*?\)\s*/g, str);
  console.log(removeParentheseAndContcat);
}

solution("foo(bar(baz))blim");
