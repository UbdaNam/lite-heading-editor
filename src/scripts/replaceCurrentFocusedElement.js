const createNewElement = (elementName, title) => {
  const newEle = document.createElement(elementName);
  newEle.setAttribute('contentEditable', 'true');
  newEle.setAttribute('placeholder', title);
  newEle.classList.add('text-input');

  return newEle;
};

const replaceCurrentFocusedElement = (elementName, title) => {
  const newEle = createNewElement(elementName, title);
  const currEle = document.querySelector('#editing');

  if (currEle) {
    const parent = currEle.parentNode;
    const nextSibling = currEle.nextElementSibling;

    parent.insertBefore(newEle, nextSibling);
    parent.removeChild(currEle);

    const optionsListContainer = newEle.nextElementSibling;
    if (optionsListContainer) {
      optionsListContainer.classList.remove('visible');
    }
  }

  return newEle;
};

export default replaceCurrentFocusedElement;
