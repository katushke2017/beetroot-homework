//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
const perfectNumber = (num) => {
  let sum = 0;

  for (let i = 0; i < num / 2 + 1; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num) {
    console.log(`число ${num} є досконалим`);
  }
};
export default perfectNumber;
