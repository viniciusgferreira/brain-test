import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
