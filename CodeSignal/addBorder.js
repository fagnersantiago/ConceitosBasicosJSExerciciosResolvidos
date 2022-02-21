function solution(picture) {
  let start = picture[0].length + 2;
  let end = picture[0].length + 2;
  let arr = [];
  let insertStartAsterisk = "*".repeat(start);
  let insertEndAsterisk = "*".repeat(end);

  arr.push(insertStartAsterisk);

  for (let i = 0; i < picture.length; i++) {
    let asterisk = "*" + picture[i] + "*";
    arr.push(asterisk);
  }

  arr.push(insertEndAsterisk);
  console.log(arr);
}
solution(["abc", "ded"]);
