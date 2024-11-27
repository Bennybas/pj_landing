import React from 'react';
import German from './German';
import France from './France';

const JourneyStage = ({ stage, metrics, barriers, findings, selectedCountry,fstage,fmetrics, fbarriers, ffindings, }) => {
  return (
    <div>
      {selectedCountry === 'germany' ? (
        <German 
          stage={stage} 
          metrics={metrics} 
          barriers={barriers} 
          findings={findings} 
        />
      ) : (
        <France 
          stage={fstage} 
          metrics={fmetrics} 
          barriers={fbarriers} 
          findings={ffindings} 
        />
      )}
    </div>
  );
};

export default JourneyStage;
