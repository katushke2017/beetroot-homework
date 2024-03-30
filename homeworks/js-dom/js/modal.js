const modal = () => {
  const DOMModal = document.getElementById('js-modal');
  const DOMBtn = document.getElementById('js-button-window');
  const DOMClose = document.getElementById('js-close');

  if (DOMModal && DOMBtn && DOMClose)
    //  open the modal
    DOMBtn.addEventListener('click', () => {
      DOMModal.style.display = 'block';
    });

  // click on <span> (x), close the modal
  DOMClose.addEventListener('click', () => {
    DOMModal.style.display = 'none';
  });

  //  click anywhere outside of the modal, close it
  window.addEventListener('click', (e) => {
    if (e.target === DOMModal) {
      DOMModal.style.display = 'none';
    }
  });
};

export default modal;
