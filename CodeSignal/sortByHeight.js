function solution(a) {
  let peopleHeight = a.filter((height) => height !== -1);
  peopleHeight.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = peopleHeight.shift();
    }
  }
  return a;
}
solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);
