import handleElementFocus from '../utils/elementFocusHelper.js';

const handleEditorKeydown = (
  e,
  editor,
  orginalInput,
  optionsListContainer,
  isPopupVisible
) => {
  const target = e.target;

  if (target.matches('#editing')) {
    if (e.key === 'Enter') {
      handleEnterKey(
        e,
        editor,
        orginalInput,
        optionsListContainer,
        isPopupVisible
      );
    } else if (
      e.key === 'Escape' &&
      editor.querySelectorAll('.text-input').length > 1
    ) {
      handleEscapeKey(editor, optionsListContainer, isPopupVisible);
    } else if (
      e.key === 'Backspace' &&
      editor.querySelectorAll('.text-input').length > 1
    ) {
      handleBackSpaceKey(e, editor);
    }
  }
};

const handleEnterKey = (
  e,
  editor,
  orginalInput,
  optionsListContainer,
  isPopupVisible
) => {
  e.preventDefault();

  const clonedNewInput = orginalInput.cloneNode();
  const nextEle = document.getElementById('editing').nextElementSibling;

  editor.insertBefore(clonedNewInput, nextEle);
  isPopupVisible = false;
  optionsListContainer.classList.remove('visible');
  clonedNewInput.focus();
};

const handleEscapeKey = (editor, optionsListContainer, isPopupVisible) => {
  const currEle = document.getElementById('editing');
  const siblingElement =
    currEle.previousElementSibling || currEle.nextElementSibling;

  isPopupVisible = false;
  optionsListContainer.classList.remove('visible');

  handleElementFocus(siblingElement);
  editor.removeChild(currEle);
};

const handleBackSpaceKey = (e, editor) => {
  const currEle = document.getElementById('editing');

  if (currEle.textContent === '') {
    const siblingElement =
      currEle.previousElementSibling || currEle.nextElementSibling;

    e.preventDefault();
    handleElementFocus(siblingElement);
    editor.removeChild(currEle);
  }
};

export default handleEditorKeydown;
