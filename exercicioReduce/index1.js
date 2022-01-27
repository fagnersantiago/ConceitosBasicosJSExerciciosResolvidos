// //Learning about Reduce Array

const clotherStore = [
  {
    brand: "Aleatory",
    price: 150,
  },
  {
    brand: "Mister",
    price: 150,
  },
];

const totalValue = clotherStore.reduce(
  (accumultator, index) => accumultator + index.price,
  0
);

console.log(totalValue);

const array = [1, 2, 3, 4].reduce((acc, index) => acc + index, 2);
console.log(array);
