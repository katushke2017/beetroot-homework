//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
const area = (params) => {
  if (params.length === 2) {
    return params[0] * params[1];
  } else if (params.length === 1) {
    return params[0] ** 2;
  } else {
    return 0;
  }
};

export default area;
