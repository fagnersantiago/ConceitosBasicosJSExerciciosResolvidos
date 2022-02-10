function solution(n) {
  let string = String(n);
  let result = string.split("");
  let getSecondNumber = result.slice(result.length / 2);
  let getFirstNumber = result.slice(0, result.length / 2);

  let sumAllElementFirstArray = getFirstNumber.reduce(
    (acc, currentValue) => parseInt(acc) + parseInt(currentValue)
  );

  let sumAllElementSecondArray = getSecondNumber.reduce(
    (previousValue, currentValue) => {
      return parseInt(previousValue) + parseInt(currentValue);
    }
  );

  return sumAllElementFirstArray === sumAllElementSecondArray ? true : false;
}

solution(239017);
