// Learnig about destructure
const family = {
  me: "Fagner",
  father: "Fernando",
  mother: "Lucia",
  brother: {
    brotherNames: "Fabio , Fabiana, Felipe",
  },
};

const {
  me,
  father,
  mother,
  brother: { brotherNames },
} = family;

console.log(me, father, mother, brotherNames);
