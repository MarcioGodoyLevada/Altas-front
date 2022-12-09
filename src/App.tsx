import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Theme from '../src/styles/theme';

import AppRoutes from './routes/app.routes';

import { SessionProvider } from './contexts/session';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <SessionProvider>
          <AppRoutes />
        </SessionProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
