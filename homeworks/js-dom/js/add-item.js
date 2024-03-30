const addItem = (author, son) => {
  const DOMList = document.getElementById('js-list');
  if (DOMList) {
    const li = document.createElement('li');
    li.classList.add('list-item');

    const spanAuthor = document.createElement('span');
    spanAuthor.classList.add('list-span');
    spanAuthor.innerText = author + ' - ';

    const spanSon = document.createElement('span');
    spanSon.classList.add('list-span');
    spanSon.innerText = son;

    li.appendChild(spanAuthor);
    li.appendChild(spanSon);
    DOMList.appendChild(li);
  } else {
    throw new Error('DOM-Елемент не існує');
  }
};

export default addItem;
