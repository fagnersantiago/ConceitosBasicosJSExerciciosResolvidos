function solution(n) {
  let string = String(n);
  let result = string.split("");
  let arr = [];
  const sliceArray = result.reduce((acc, currentValue, currentIndex) => {
    const index = Math.floor(currentIndex / 2);
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(currentValue);
    return acc;
  }, []);

  for (let value in sliceArray) {
    let result1 = parseInt(sliceArray[value][0]);
    let result2 = parseInt(sliceArray[value][1]);
    let sum = result1 + result2;
    arr.push(sum);
  }
  return arr;
}
solution(121212);
