import handleElementFocus from '../../src/utils/elementFocusHelper';

describe('handleElementFocus', () => {
  it('it focuses the element correctly', () => {
    const selectObject = window.getSelection();
    const range = document.createRange();
    const element = document.createElement('div');

    handleElementFocus(element, selectObject, range);
    expect(element).toHaveFocus;
  });

  test('it puts the caret at the end of the text content', () => {
    let selectObject = window.getSelection();
    const range = document.createRange();
    const element = document.createElement('div');

    element.textContent = 'Hello, World!';

    const afterFocus = () => {
      expect(selectObject.focusOffset).toBe(element.textContent.length);
      done();
    };

    handleElementFocus(element, selectObject, range);
    requestAnimationFrame(afterFocus);
  });
});
