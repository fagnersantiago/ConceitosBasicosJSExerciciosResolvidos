function solution(a, b) {
  // let resul = [];
  // let count = 0;
  // for (let i = 0; i < a.length; i++) {
  //   for (let j = 0; j < b.length; j++) {
  //     if (a[i] !== b[j]) {
  //       return resul.push(a[i], b[j]);
  //     }
  //   }
  // }
  // console.log(resul);

  a.forEach((element, index) => {
    b.forEach((e, i) => {
      console.log(`${element} -- ${index} ---- elemento b:${e}--${i}`);
    });
  });
}

solution(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
);
