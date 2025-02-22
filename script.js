// * Challenge: Generate a random integer
const generateRandom = (min, max) => {
  const result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
};

console.log(generateRandom(1, 10));
