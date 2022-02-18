function solution(picture) {
  let start = picture[0].length + 2;
  let end = picture[0].length + 2;
  let arr = [];
  let insertStartAsterisk = "*".repeat(start);
  let insertEndAsterisk = "*".repeat(end);

  arr.push(insertStartAsterisk);

  for (let i = 0; i < picture.length; i++) {
    let asteristico = "*" + picture[i] + "*";
    arr.push(asteristico);
  }

  arr.push(insertEndAsterisk);
  console.log(arr);
}
solution(["abc", "ded"]);

["*****", "*abc*", "*ded*", "*****"];
