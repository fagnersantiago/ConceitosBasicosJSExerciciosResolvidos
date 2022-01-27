// Example
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.
// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.
// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function solution(sequence) {
  // sequence.sort((a, b) => a - b);

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] < sequence[i + 1] && sequence[i + 1] - sequence[i] > 0) {
    } else {
      return false;
    }
  }
  // let found = 0;
  // for (let i = 0; i < sequence.length; i++) {
  //   if (sequence[i] <= sequence[i - 1]) {
  //     found++;
  //     console.log(found);
  //     if (found > 1) return false;
  //     console.log(found);
  //     if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
  //       console.log(found);
  //     return false;
  //   }
  // }
  // return true;
}

console.log(solution([1, 3, 2]));
