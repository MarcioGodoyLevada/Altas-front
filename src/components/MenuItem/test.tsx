import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import MenuItem from '.';

describe('Component: MenuItem', () => {
  it('should render correctly active menu item', () => {
    const { container } = renderWithTheme(
      <MenuItem
        key={1}
        expanded={true}
        title={'Click'}
        expandable={true}
        path={'/test'}
        onClick={() => {}}
      >
        <li key={1}>{'ativo'}</li>
        ))
      </MenuItem>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent('Click');
    expect(container).toHaveTextContent('ativo');
  });

  it('should render correctly inactive menu item', () => {
    const { container } = renderWithTheme(
      <MenuItem
        key={1}
        expanded={false}
        title={'Click'}
        expandable={true}
        path={'/test'}
        onClick={() => {}}
      >
        <li key={1}>{'fechado'}</li>
        ))
      </MenuItem>
    );

    expect(container).toHaveTextContent('Click');
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.queryByText('fechado')).not.toBeInTheDocument();
  });

  it('should render correctly menu item click', () => {
    renderWithTheme(
      <>
        <MenuItem
          key={1}
          expanded={true}
          title={'PrimaryClick'}
          expandable={true}
          path={'/test'}
          onClick={() => {}}
        >
          <li key={1}>{'PrimaryAtivo'}</li>
          ))
        </MenuItem>

        <MenuItem
          key={2}
          expanded={false}
          title={'SecondaryClick'}
          expandable={true}
          path={'/test'}
          onClick={() => {}}
        >
          <li key={2}>{'SecondaryAtivo'}</li>
          ))
        </MenuItem>
      </>
    );

    const PrimaryItem = screen.getByText('PrimaryClick');
    const SecondaryItem = screen.getByText('SecondaryClick');

    fireEvent.click(PrimaryItem);

    expect(PrimaryItem).toBeInTheDocument();
    expect(screen.getByText('PrimaryAtivo')).toBeInTheDocument();
    expect(SecondaryItem).toBeInTheDocument();
    expect(screen.queryByText('SecondaryAtivo')).not.toBeInTheDocument();
  });
});
