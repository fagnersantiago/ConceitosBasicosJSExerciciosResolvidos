function soluction(sequence) {
  let isSequence = true;
  // sequence.sort((a, b) => a - b);
  console.log(sequence);
  for (let i = 0; i < sequence.length; i++) {
    if (
      sequence[i] <= sequence[i + 1] &&
      sequence[i + 1] >= sequence[i] &&
      sequence[i + 1] < sequence[i + 2] &&
      sequence.length == 0
    ) {
      return isSequence;
    } else {
      return !isSequence;
    }
  }
}

console.log(soluction([1, 2, 5, 5, 5]));
