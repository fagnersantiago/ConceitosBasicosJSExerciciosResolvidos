//para ser um room válido e somar ele tem que ser maior que 0 e os codebots tem que estar acima dele
//se room não for = 0 e n estiver acima de qualquer valor devemos somá-lo

function solution(matrix) {
  let sumOfRooms = 0;
  let removeRoom = [];

  //Primero for para ler as linha da matrix
  for (let i = 0; i < matrix.length; i++) {
    //segundo for para ler as colunas
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        removeRoom.push(j);
        console.log(removeRoom);
      } else if (removeRoom.indexOf(j) === -1) {
        sumOfRooms += matrix[i][j];
      }
    }
  }
  return sumOfRooms;
}
console.log(
  solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
