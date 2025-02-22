// * Challenge: Generate a random integer
const generateRandom = (min, max) => {
  if (!min && !max) {
    return "Enter Min and Max";
  }
  console.log(min, max);
  if (!max) {
    max = min;
    min = 0;
  }
  const result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
};

console.log(generateRandom(1, 10));
console.log(generateRandom());
console.log(generateRandom(100));
