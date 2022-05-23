import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import MainLayout from './components/Layout';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>

        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
