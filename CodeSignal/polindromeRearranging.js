function solution(inputString) {
  const isPolindrome = inputString.split("")[0];

  //   aabb;
  //   abba;
  //   abbcabb;
  //   abbcbba;
  //   zyyzzzzz;
  //   zyzzzzyz;
  //   zaa;
  //   aza;
  // for (let i = 0; i < inputString.length; i++) {
  //   if (inputString.length >= 3 && inputString[i] !== inputString[i + 1]) {
  //     inputString = inputString[i + 1] + inputString[i];
  //   }
  // }
  // let r = inputString + inputString[0];
  // if (r === r.split("").reverse().join("")) {
  //   console.log(r);
  //   return console.log(true);
  // }
  // return false;
  console.log(isPolindrome);
}

solution("aabb");
