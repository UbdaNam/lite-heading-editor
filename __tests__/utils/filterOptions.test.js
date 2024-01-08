import filterOptions from '../../src/utils/filterOptions';
import options from '../../src/data/options';

describe('filterOptions', () => {
  it('Should return all options if text is empty', () => {
    let text = '';

    const result = filterOptions(options, text);

    expect(result).toHaveLength(2);
  });

  it('Should return options with titles matching the given text', () => {
    let text = 'Expandable';

    const result = filterOptions(options, text);

    expect(result).toHaveLength(1);
  });

  it('Should return empty options given non matching text', () => {
    let text = 'Paragraph';

    const result = filterOptions(options, text);

    expect(result).toHaveLength(0);
  });

  it('Should perform case-insensitive matching for the given text', () => {
    let text = 'EXPanDaBlE';

    const result = filterOptions(options, text);

    expect(result).toHaveLength(1);
  });

  it('Should return options with titles containing the given text as a substring', () => {
    let text = 'pandab';

    const result = filterOptions(options, text);

    expect(result).toHaveLength(1);
  });
});
