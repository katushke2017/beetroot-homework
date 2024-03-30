import sonsList from './js/sons-list.js';
import changeLight from './js/change-light.js';
import modal from './js/modal.js';

sonsList();
modal();

let activeClick = 0;
const DOMButton = document.getElementById('js-button-lights');

if (DOMButton) {
  DOMButton.addEventListener('click', () => {
    console.log(activeClick);
    changeLight(activeClick);
    activeClick++;

    if (activeClick > 2) {
      activeClick = 0;
    }
  });
}
