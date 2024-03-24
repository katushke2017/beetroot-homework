//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону,
//які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
import perfectNumber from './perfect-number.js';

const perfectNumbers = (min, max) => {
  console.log(`досконалі числа в діапазоні від ${min} до ${max}`);

  for (let k = min; k <= max; k++) {
    perfectNumber(k);
  }
};

export default perfectNumbers;
