import options from '../data/options.js';
import handleEditorKeydown from './handleKeyPress.js';
import populatePopupOptions from './populatePopupOptions.js';
import filterOptions from '../utils/filterOptions.js';
import replaceCurrentFocusedElement from './replaceCurrentFocusedElement.js';

let orginalInput = document.querySelector('.main-input');
let textInput = document.querySelector('.text-input');
let editor = document.querySelector('.editor');
let optionsListContainer = document.querySelector('.popup');
let isPopupVisible = false;
textInput.setAttribute('id', 'editing');

const renderOptions = () => {
  textInput = document.getElementById('editing');
  let inputText = textInput.innerText;
  let filterKeyword = '';
  const match = inputText.match(/\/([^\/\s]+)$/);
  const text = inputText.split('/');
  const lastChar = inputText.slice(-1);
  if (match) {
    filterKeyword = match[1];
  }

  if (inputText.match(/\/1\s/)) {
    replaceCurrentFocusedElement('h1', 'Heading 1').focus();
    return;
  }

  if (
    !text[text.length - 1].includes(' ') &&
    text.length != 1 &&
    lastChar.trim() != ''
  ) {
    let filteredOptions = filterOptions(options, filterKeyword);
    populatePopupOptions(filteredOptions, filterKeyword);

    if (!isPopupVisible) {
      isPopupVisible = true;
      optionsListContainer.classList.add('visible');
      let parentOffset = textInput.offsetParent.getBoundingClientRect();
      let elementOffset = textInput.getBoundingClientRect();
      let offsetTop = elementOffset.top - parentOffset.top + 12;
      let offsetLeft = elementOffset.left - parentOffset.left;
      optionsListContainer.style.top = offsetTop + 'px';
      optionsListContainer.style.left = offsetLeft + 'px';
    }

    feather.replace();
  } else if (isPopupVisible) {
    isPopupVisible = false;
    optionsListContainer.classList.remove('visible');
  }
};

editor.addEventListener('input', (event) => {
  const target = event.target;

  if (target.matches('#editing') && target.matches('div')) {
    renderOptions();
  }
});

editor.addEventListener('keydown', (e) =>
  handleEditorKeydown(
    e,
    editor,
    orginalInput,
    optionsListContainer,
    isPopupVisible
  )
);

const setActiveElement = () => {
  isPopupVisible = false;
  optionsListContainer.classList.remove('visible');
  const currActiveElement = document.activeElement;
  if (document.getElementById('editing')) {
    document.getElementById('editing').removeAttribute('id');
  }

  if (currActiveElement.classList.contains('text-input')) {
    currActiveElement.setAttribute('id', 'editing');
  } else {
    editor.insertBefore(orginalInput.cloneNode(), optionsListContainer).focus();
  }
};

editor.addEventListener('focus', setActiveElement, true);
editor.addEventListener('click', setActiveElement);
