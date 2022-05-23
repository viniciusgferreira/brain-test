import { ResponsivePieCanvas } from '@nivo/pie';
import { useEffect, useState } from 'react';

import api from '../../../../services/api';

export default function PieCulture() {
  const [dataPieCulture, setDataPieCulture] = useState([]);

  useEffect(() => {
    async function loadPieCulture() {
      try {
        const response = await api.get('graph-culture');
        console.log(response.data);

        setDataPieCulture(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPieCulture();
  }, []);
  return (
    <ResponsivePieCanvas
      // {...commonProperties}
      data={dataPieCulture}
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
