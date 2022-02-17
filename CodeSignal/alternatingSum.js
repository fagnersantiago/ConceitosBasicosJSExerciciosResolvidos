//step 1: get value  team 1
//step 2: get value team2
//step 3: sum team value
//step 4: sum team2 value
//step 5 retur value team  and team2
function solution(a) {
  let team1 = [];
  let team2 = [];
  let totalWeight = [];

  a.filter((value, index) => {
    index % 2 === 0 ? team1.push(value) : team2.push(value);
  });

  let sumOfWeightTeam1 = team1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  let sumOfWeightTeam2 = team2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  totalWeight.push(sumOfWeightTeam1, sumOfWeightTeam2);
  return totalWeight;
}

solution([50, 60, 60, 45, 70]);
