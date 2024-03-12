var flag;
do {
  const YEAR = 2024;
  const KURS = 0.9153;
  let username = '';
  let birthYear;

  // what is your name
  username = prompt('Як тебе звати?', 'Інкогніто');
  alert('Привіт, ' + username.toUpperCase());

  // how old are you
  birthYear = +prompt('В якому році ти народився?', 2002);
  const years = YEAR - birthYear;
  alert(`Тобі - ${years} років`);
  console.log('тобі', years, 'років');

  //Square perimetr
  const lineLenght = +prompt('Задай довжину сторони квадрата', 5);
  console.log('Периметр =', 4 * lineLenght);

  // Circle area
  const radius = +prompt('Задай радіус кола', 5);
  let area = Math.PI * radius * radius;
  console.log('Площа кола =', area.toFixed(2));

  // Convertor
  const dollar = +prompt('Конвертни долари в євро, ввди кількість доларів ', 5);
  console.log('в євро то буде =', (dollar * KURS).toFixed(2));

  flag = confirm('Бажаєте продовжити?');
  // console.log("flag", flag);
} while (flag);
