function solution(a, b) {
  let interationArrayA = [];
  let interationArrayB = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      interationArrayA.push(a[i]);
      interationArrayB.push(b[i]);
    }
  }

  if (
    interationArrayA.length === 2 &&
    interationArrayB.reverse().toLocaleString() === arr.toLocaleString()
  ) {
    return true;
  } else if (
    interationArrayA.toLocaleString() === interationArrayB.toLocaleString()
  ) {
    return true;
  }

  return false;
}

solution(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
);
