import React from 'react';
import { Card } from '../ui/card';

const EconomicImpact = () => (
<Card className="mt-12 p-6 bg-purple-50">
  <h3 className="font-bold mb-4">Economic Impact & Social Dynamics of SMA</h3>
  <div className="grid grid-cols-3 gap-4">
    {[
      { value: "18%", label: "of Women with SMA self-report a history of being pregnant" },
      { value: "68%", label: "of Adults with SMA are unmarried" },
      { value: "8%", label: "of Adults with SMA report Financial struggles" },
      { value: "19%", label: "of Adults with SMA are employed part-time" },
      { value: "17%", label: "of Adults with SMA find it hard to get along with family members" },
      { value: "2%", label: "of Adults with SMA face utility shut-off threats" }
    ].map((item, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg">
        <div className="text-xl font-bold text-purple-600">{item.value}</div>
        <div className="text-sm text-gray-600">{item.label}</div>
      </div>
    ))}
  </div>
</Card>
);

export default EconomicImpact;