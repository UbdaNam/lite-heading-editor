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
  isPopupVisible = false;
  optionsListContainer.classList.remove('visible');

  const currEle = document.getElementById('editing');
  editor.removeChild(currEle);
};

export default handleEditorKeydown;
