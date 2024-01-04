const filterOptions = (optionsArr, text) => {
  return optionsArr.filter(({ title }) =>
    title.toLowerCase().includes(text.toLowerCase())
  );
};

export default filterOptions;
