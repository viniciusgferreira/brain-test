import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Container } from './styles';

export default function FarmCounter() {
  const { value } = useSelector((state: RootState) => state.farm);

  return (
    <Container>
      <h1>Fazendas cadastradas hoje: {value}</h1>
    </Container>
  );
}
