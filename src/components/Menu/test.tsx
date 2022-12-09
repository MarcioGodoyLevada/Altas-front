import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import Menu from '.';

describe('Component: Menu', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Menu expandable={true} />);
    const text = screen.getByText(/Gerenciamento/i);

    expect(container.firstChild).toMatchSnapshot();
    expect(text).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
