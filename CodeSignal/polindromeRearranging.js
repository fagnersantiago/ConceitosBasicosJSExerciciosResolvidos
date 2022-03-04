function solution(inputString) {
  let charToObj = {};
  // primeiro obter a contidade de caracteres tranformando em um objeto
  for (const value of inputString) {
    if (!charToObj[value]) {
      charToObj[value] = 1;
    } else {
      charToObj[value] = charToObj[value] + 1;
    }
  }
  //para ser um polindromo os elementos iguais devem ser par ou se tiver ao menos um ímpar entre os elementos

  //filtrar os caracteres ímpares
  let countOddLetter = Object.values(charToObj).filter(
    (value) => value % 2 !== 0
  );
  //se existir mais de um caractere impar então não pode ser um polindoromo
  if (countOddLetter.length > 1) {
    return false;
  }
  return true;
}

solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa");
