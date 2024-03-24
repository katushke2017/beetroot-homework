const checkNumber = (num) => {
  if (isNaN(num)) {
    throw new Error('Введене значення не число');
  }
};

export default checkNumber;
