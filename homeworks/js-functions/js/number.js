//апиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
const number = (a, b, c) => {
  const res = a * 100 + b * 10 + c;
  return `Сформоване число з параметрів ${a}, ${b}, ${c}: ${res}`;
};

export default number;
