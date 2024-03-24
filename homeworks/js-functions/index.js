import calc from './js/calc.js';
import compare from './js/compare.js';
import factorial from './js/factorial.js';
import number from './js/number.js';
import perfectNumber from './js/perfect-number.js';
import perfectNumbers from './js/perfect-numbers.js';
import checkNumber from './js/check-number.js';
import checkPositive from './js/check-positive.js';
import area from './js/area.js';

//виклик функції, яка підраховує кількість власних аргументів
console.log('Task 1. /*******************/');

calc(8, 78, 'hello');

//порівняння чисел
console.log('\nTask 2. /*******************/');

const a = +prompt('Введіть перше число', 12);
checkNumber(a);

const b = +prompt('Введіть друге число', 8);
checkNumber(b);

const res = compare(a, b);
console.log(
  `Порівняння двох чисел ( a>b => 1, a<b =>-1, a==b =>0 ) \n a=${a} та b=${b}, \n результат порівняння: ${res} `
);

//факторіал числа
console.log('\nTask 3. /*******************/');

const fact = +prompt('Введіть число для обчислення факторіалу', 5);
checkPositive(fact);

console.log(`Факторіал числа ${fact} = ${factorial(fact)}`);

//формування числа
console.log('\nTask 4. /*******************/');

const one = +prompt('Введіть перше число', 5);
checkPositive(one);

const two = +prompt('Введіть друге число', 8);
checkPositive(two);

const three = +prompt('Введіть третє число', 7);
checkPositive(three);

console.log(number(one, two, three));

//площа чотирикутника чи квадрата
console.log('\nTask 5. /*********площа чотирикутника чи квадрата/');

const flag = confirm('обчислення площі: ok - квадрата; cansel - прямокутника ');
const mas = [];
let firstLine, secondLine;

firstLine = +prompt('Введіть довжину однієї сторони', 6);
checkPositive(firstLine);

mas.push(firstLine);

if (flag === false) {
  secondLine = +prompt('Введіть довжину другої сторони', 8);
  checkPositive(secondLine);
}

console.log('площа чотирикутника', area(mas));

//досконале число
console.log('\nTask 6. /*******************/');

const perfectNum = +prompt(
  'Введіть число для перевірки чи є воно досконалим',
  28
);
checkPositive(perfectNum);

perfectNumber(perfectNum);

//досконале число
console.log('\nTask 7. /*******************/');

const min = +prompt(
  'Введіть початок діапазону для перевірки досконалих чисел в ньому',
  6
);
checkPositive(min);
const max = +prompt(
  'ведіть кінець діапазону для перевірки досконалих чисел в ньому',
  15000
);

checkPositive(max);
perfectNumbers(min, max);
