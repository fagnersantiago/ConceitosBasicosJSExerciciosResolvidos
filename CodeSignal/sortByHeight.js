function solution(a) {
  let arr = a.filter((height) => height !== -1);
  arr.sort((a, b) => a - b);
  console.log(arr);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = arr.shift();
    }
  }
  console.log(a);
  return a;
}
solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);
//log 1, 3, -1, 23, 1
