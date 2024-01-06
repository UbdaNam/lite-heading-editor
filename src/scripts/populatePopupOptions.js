import replaceCurrentFocusedElement from './replaceCurrentFocusedElement.js';

const populatePopupOptions = (options, filterKeyword) => {
  let optionsList = document.querySelector('.options-list');
  optionsList.innerHTML = ``;

  const filteredKeywordCounter = document.createElement('div');
  if (!options.length) {
    const noMatchEle = document.createElement('div');
    noMatchEle.classList.add('no-match');
    noMatchEle.innerHTML = `<p>No blocks found!</p>`;
    optionsList.appendChild(noMatchEle);

    return;
  }

  filteredKeywordCounter.classList.add('filter-status');
  filteredKeywordCounter.innerHTML = `<span>Filtering keyword</span><span>${filterKeyword}</span>`;
  optionsList.appendChild(filteredKeywordCounter);

  options.forEach((option) => {
    const optionEle = document.createElement('div');
    optionEle.classList.add('option');
    optionEle.innerHTML = `<i data-feather="${option.icon}"></i>
      <div class="option-text">
        <h3>${option.title}</h3>
        <span>Shortcut: ${option.shortcut}</span>
      </div>`;

    optionsList.appendChild(optionEle);

    optionEle.addEventListener('click', () => {
      const newElement = replaceCurrentFocusedElement(
        option.value,
        option.title
      );
      newElement.focus();
    });
  });
};

export default populatePopupOptions;
