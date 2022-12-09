import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '../../utils/tests/helpers';

import InputPassword from '.';

describe('<InputPassword />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <InputPassword label="Input Password" name="field" />
    );

    expect(screen.getByLabelText('Input Password')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change the input type to text on click', () => {
    const { container } = renderWithTheme(
      <InputPassword name="password" label="password" />
    );
    const icon = container.querySelector('svg');
    const input = screen.getByLabelText(/password/i);

    expect(input).toHaveAttribute('type', 'password');

    userEvent.click(icon as SVGSVGElement);

    waitFor(() => {
      expect(input).toHaveAttribute('type', 'text');
    });
  });

  it('should change the input type to password on double click', () => {
    const { container } = renderWithTheme(
      <InputPassword name="password" label="password" />
    );
    const icon = container.querySelector('svg');
    const input = screen.getByLabelText(/password/i);

    userEvent.dblClick(icon as SVGSVGElement);

    waitFor(() => {
      expect(input).toHaveAttribute('type', 'password');
    });
  });
});
