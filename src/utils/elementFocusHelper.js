const handleElementFocus = (element, selectObject, range) => {
  selectObject.removeAllRanges();
  range.selectNodeContents(element);
  range.collapse(false);
  selectObject.addRange(range);
  element.focus();
};

export default handleElementFocus;
