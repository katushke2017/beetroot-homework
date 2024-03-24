//Створи функцію, яка буде виводити кількість переданих їй аргументів

const calc = (...params) => {
  console.log(
    `функція calc(${params}) має наступну кількість переданих аргументів: ${params.length}`
  );
};

export default calc;
