//para ser um room válido e somar ele tem que ser igual a 0 e oS  codebots tem que estar acima dele
//se room não for = 0 e n estiver acima de qualquer valor devemos somá-lo

function solution(matrix) {
  for (let prop in matrix) {
    console.log(matrix[prop]);
  }
}
console.log(
  solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
