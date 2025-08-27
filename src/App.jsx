import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage.jsx';
import GlobalStyles from './styles/GlobalStyles';

import './index.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
