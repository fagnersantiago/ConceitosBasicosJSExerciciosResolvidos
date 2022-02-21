function solution(a, b) {
  let arr = [];
  let arr2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      arr.push(b[i]);
    }
  }
  console.log(arr.length > 2 ? false : true);
}

solution([1, 1, 4], [1, 2, 3]);
