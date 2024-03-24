/*
Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.
*/
const compare = (numFirst, numSecond) => {
  return numFirst > numSecond ? 1 : numFirst < numSecond ? -1 : 0;
};

export default compare;
