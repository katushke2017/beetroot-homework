const changeLight = (activeCircle) => {
  const DOMCircles = document.querySelectorAll('.js-circle');
  const colorList = ['red', 'yellow', 'green'];

  const countCircles = DOMCircles.length;

  //  DOMCircles[activeCircle].style.backgroundColor = colorList[activeCircle];
  DOMCircles[activeCircle].classList.add(colorList[activeCircle]);

  DOMCircles.forEach((item, key) => {
    if (key != activeCircle) {
      item.classList.remove(colorList[key]);
      //  item.style.backgroundColor = 'white';
    }
  });
};

export default changeLight;
