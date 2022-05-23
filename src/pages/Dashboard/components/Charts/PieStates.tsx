import { ResponsivePieCanvas } from '@nivo/pie';
import { useEffect, useState } from 'react';

import api from '../../../../services/api';

export default function PieStates() {
  const [dataPieStates, setDataPieStates] = useState([]);

  useEffect(() => {
    async function loadPieStates() {
      try {
        const response = await api.get('graph-state');
        console.log(response.data);

        setDataPieStates(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPieStates();
  }, []);
  return (
    <ResponsivePieCanvas
      // {...commonProperties}
      data={dataPieStates}
      innerRadius={0.5}
      margin={{ top: 0, right: 200, bottom: 30, left: 170 }}
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
