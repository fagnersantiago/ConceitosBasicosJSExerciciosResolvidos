function solution(inputArray) {
  let count = 0;

  inputArray.reduce((acc, value) => {
    if (acc >= value) {
      const diff = acc + 1 - value;
      //console.log(`valor diff: ${diff}`);
      count += diff;
      console.log(`valor contador: ${count}`);
      return acc + 1;
    }
    return value;
  });
  console.log(`resultado final: ${count}`);
}
solution([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]);
