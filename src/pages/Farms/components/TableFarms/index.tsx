import { MdMode, MdDelete, MdAdd } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import Button from '../../../../components/Buttons/CustomButton';
import { Container, ContainerLoading, Table } from './styles';

interface TableFarmsProps {
  farms: FarmFormTypes[];
  handleNewFarm: () => void;
  handleEditFarm: (value: FarmFormTypes) => void;
  handleDelete: (id: string | undefined) => void;
  loading: boolean;
}

export default function TableFarms({
  farms,
  handleNewFarm,
  handleEditFarm,
  handleDelete,
  loading,
}: TableFarmsProps) {
  return (
    <Container>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nome do produtor</th>
              <th>Nome da fazenda</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Área total</th>
              <th>Culturas</th>
              <th>
                <Button type="button" color="new" onClick={handleNewFarm}>
                  Novo
                  <MdAdd style={{ marginLeft: '4px' }} />
                </Button>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8}>
                  <ContainerLoading>
                    <TailSpin
                      ariaLabel="loading-indicator"
                      height={40}
                      width={40}
                      color="green"
                    />
                    <span style={{ marginLeft: '8px' }}>Carregando... </span>
                  </ContainerLoading>
                </td>
              </tr>
            ) : (
              <>
                {farms.map(farm => (
                  <tr key={farm.id}>
                    <td>{farm.document}</td>
                    <td>{farm.productor_name}</td>
                    <td>{farm.farm_name}</td>
                    <td>{farm.state}</td>
                    <td>{farm.city}</td>

                    <td>{farm.total_area}</td>
                    <td>
                      {farm.cultures.map(culture => (
                        <p>{culture}</p>
                      ))}
                    </td>
                    <td>
                      <Button
                        type="button"
                        color="primary"
                        onClick={() => handleEditFarm(farm)}
                      >
                        <MdMode size={14} />
                      </Button>
                      <Button
                        type="button"
                        color="danger"
                        onClick={() => handleDelete(farm.id)}
                      >
                        <MdDelete size={14} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
