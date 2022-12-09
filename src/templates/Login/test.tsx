import LoginTemplate from '.';
import passwordRecover from '../../assets/images/password-recover.png';

import { renderWithTheme } from '../../utils/tests/helpers';

describe('Template: Login', () => {
  it('should render an image', () => {
    const { container } = renderWithTheme(
      <LoginTemplate image={passwordRecover} background="primary50" />
    );

    expect(container.querySelector('img')).toBeInTheDocument();
  });

  it('should render a children', () => {
    const { container } = renderWithTheme(
      <LoginTemplate image={passwordRecover} background="primary50">
        Oi
      </LoginTemplate>
    );

    expect(container).toHaveTextContent(/oi/i);
  });
});
