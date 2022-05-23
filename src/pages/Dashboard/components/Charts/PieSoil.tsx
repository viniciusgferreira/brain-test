import { ResponsivePieCanvas } from '@nivo/pie';
import { useEffect, useState } from 'react';

import api from '../../../../services/api';

export default function PieSoil() {
  const [dataPieSoil, setDataPieSoil] = useState([]);

  useEffect(() => {
    async function loadPieSoil() {
      try {
        const response = await api.get('graph-solo');
        console.log(response.data);

        setDataPieSoil(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPieSoil();
  }, []);
  return (
    <ResponsivePieCanvas
      // {...commonProperties}
      data={dataPieSoil}
      innerRadius={0.5}
      margin={{ top: 40, right: 80, bottom: 30, left: 80 }}
      padAngle={0.2}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'paired' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.6]],
      }}
      enableArcLabels
      arcLinkLabel={d => `${d.id} (${d.formattedValue})`}
      arcLinkLabelsSkipAngle={3}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={3}
      arcLabelsTextColor="#333333"
    />
  );
}
