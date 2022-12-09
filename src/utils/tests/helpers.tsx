import { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import { MemoryRouter } from 'react-router-dom';
import { SessionProvider } from '../../contexts/session';

const ThemeWrapper: FC = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider theme={theme}>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  </MemoryRouter>
);

export const renderWithTheme = (
  children: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(children, { wrapper: ThemeWrapper, ...options });
