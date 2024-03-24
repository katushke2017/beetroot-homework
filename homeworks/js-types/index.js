// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді
const result = 0.1 + 0.2;
// перший варіант, але результат - рядок
console.log('sum =', result.toFixed(2));

// другрий варіант - число на виході
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const one = '1';
const two = 2;
console.log("'1'+2=", one + two);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const GB = 1024;
const fileSize = 820;
const sizeGb = +prompt('Введіть обсяг флешки в Гб', 15);
// перевірка чи введене значення існує, не 0 та додатнє
if (sizeGb && !isNaN(sizeGb) && sizeGb > 0) {
  const countFiles = (sizeGb * GB) / fileSize;
  alert(
    `на флешку поміщається ${Math.floor(countFiles)} файлів розміром 820Мб`
  );
} else {
  alert('Некоретно введене значення, конвертація неможлива!!!');
}

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let flagAmount,
  flagPice = false;

const amount = +prompt('Скільки маєте грошей, в гривні', 100);

if (amount && !isNaN(amount) && amount > 0) {
  flagAmount = true;
} else {
  alert('Некоретно введене значення, !!!');
}

const price = +prompt('Скільки коштує одна шоколадка', 27);

if (price && !isNaN(price) && price > 0) {
  flagPrice = true;
} else {
  alert('Некоретно введене значення, !!!');
}

if (flagAmount && flagPrice) {
  alert(
    `можна купити ${Math.floor(
      amount / price
    )} шоколадки та будеш мати решту: ${Math.floor(amount % price)}`
  );
}

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const count = +prompt('Введіть трьохзначне число', 653);

if (count && !isNaN(count)) {
  const third = Math.floor(count % 10);
  console.log(third);
  const two = count / 10;
  const second = Math.floor(two % 10);
  const first = Math.floor(two / 10);
  const result = third * 100 + second * 10 + first;

  console.log(`Резульат: ${result}`);
} else {
  alert('Некоретно введене значення, !!!');
}

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const sum = +prompt('введіть суму вкладу, в гривні', 15000);

if (sum && !isNaN(sum) && sum > 0) {
  const procentsMonth = (sum * 0.05) / 12;
  const procents = procentsMonth * 2;

  console.log(procents);
  alert('Ваші відстоки за два місцяці - ' + procents.toFixed(2) + 'грн.');
} else {
  alert('Некоретно введене значення, !!!');
}
