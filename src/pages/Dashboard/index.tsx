import Header from '../../components/Header';

import { Container, ContentCultAg, ContentState, Wrapper } from './styles';

import PieStates from './components/Charts/PieStates';
import PieCulture from './components/Charts/PieCulture';
import PieSoil from './components/Charts/PieSoil';
import FarmCounter from '../../components/FarmCounter';

export default function Dashboard() {
  return (
    <>
      <Header />
      <FarmCounter />
      <Container>
        <ContentCultAg>
          <Wrapper>
            <h2>Fazendas por cultura</h2>

            <PieCulture />
          </Wrapper>
          <Wrapper>
            <h2>Fazendas por solo</h2>
            <PieSoil />
          </Wrapper>
        </ContentCultAg>
        <ContentState>
          <h2>Fazendas por estado</h2>
          <PieStates />
        </ContentState>
      </Container>
    </>
  );
}
