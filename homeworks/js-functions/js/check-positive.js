const checkPositive = (num) => {
  if (isNaN(num) || num < 0) {
    throw new Error("Введене значення не число та від'ємне");
  }
};

export default checkPositive;
