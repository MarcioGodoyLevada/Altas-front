import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '../../utils/tests/helpers';

import InputText from '.';

const LABEL_TRANSITION_AWAITING_TIME = 1000;

describe('<InputText />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <InputText label="Input Text" name="field" />
    );

    expect(screen.getByLabelText('Input Text')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    renderWithTheme(<InputText />);

    expect(screen.queryByLabelText('Input Text')).not.toBeInTheDocument();
  });

  it('should render label correctly when input is focused', async () => {
    renderWithTheme(<InputText label="Input Text" name="field" />);

    userEvent.tab();

    setTimeout(() => {
      expect(screen.getByText('Input Text')).toHaveStyle({
        transform: 'scale(1) translate(1rem,-50%)',
      });
    }, LABEL_TRANSITION_AWAITING_TIME);
  });

  it('should render label correctly when input is filled', async () => {
    renderWithTheme(
      <InputText label="Input Text" name="field" value="value" />
    );

    setTimeout(() => {
      expect(screen.getByText('Input Text')).toHaveStyle({
        transform: 'scale(1) translate(1rem,-50%)',
      });
    }, LABEL_TRANSITION_AWAITING_TIME);
  });

  it('should render with placeholder', () => {
    renderWithTheme(<InputText placeholder="Placeholder Text" />);

    expect(screen.getByPlaceholderText('Placeholder Text')).toBeInTheDocument();
  });

  it('it should change its value when typing', async () => {
    const onChange = jest.fn();

    renderWithTheme(
      <InputText onChange={onChange} label="Input Text" name="field" />
    );

    const input = screen.getByRole('textbox');
    const text = 'My new text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChange).toHaveBeenCalledTimes(text.length);
    });
  });

  it('should be accessible by tab', () => {
    renderWithTheme(<InputText label="Input Text" name="field" />);

    const input = screen.getByLabelText('Input Text');

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(input).toHaveFocus();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(<InputText errorMessage="Error" />);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
