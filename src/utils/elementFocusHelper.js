const handleElementFocus = (element) => {
  const selectObj = window.getSelection();
  const range = document.createRange();

  selectObj.removeAllRanges();
  range.selectNodeContents(element);
  range.collapse(false);
  selectObj.addRange(range);
  element.focus();
};

export default handleElementFocus;
