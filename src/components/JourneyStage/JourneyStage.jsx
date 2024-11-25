import React from 'react';
import German from './German';
import France from './France';

const JourneyStage = ({ stage, metrics, barriers, findings, selectedCountry }) => {
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
          stage={stage} 
          metrics={metrics} 
          barriers={barriers} 
          findings={findings} 
        />
      )}
    </div>
  );
};

export default JourneyStage;
