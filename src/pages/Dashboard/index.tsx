import Header from '../../components/Header';

import {
  Container,
  ContentCultAg,
  ContentState,
  CultureWrapper,
  SoilWrapper,
} from './styles';

import PieStates from './components/Charts/PieStates';
import PieCulture from './components/Charts/PieCulture';
import PieSoil from './components/Charts/PieSoil';

export default function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <ContentCultAg>
          <CultureWrapper>
            <h2>Fazendas por cultura</h2>
            <PieCulture />
          </CultureWrapper>
          <SoilWrapper>
            <h2>Fazendas por solo</h2>
            <PieSoil />
          </SoilWrapper>
        </ContentCultAg>
        <ContentState>
          <h2>Fazendas por estado</h2>
          <PieStates />
        </ContentState>
      </Container>
    </>
  );
}
