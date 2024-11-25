import React, {useState} from 'react';
import JourneyStage from '../JourneyStage/JourneyStage';
import EconomicImpact from '../EconomicImpact/EconomicImpact';
import { journeyData } from '../../data/journeyData';


const NmosD = () => {

  const [selectedCountry, setSelectedCountry] = useState('germany');

  const toggleCountry = () => {
    setSelectedCountry(selectedCountry === 'germany' ? 'france' : 'germany');
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
      <h1 className="text-2xl font-bold mb-2">NMOSD Patient Journey</h1>
      <p className="text-gray-600">Comprehensive analysis of diagnosis, treatment, and care pathway challenges</p>
      </div>
      
      <div className="absolute top-11 right-20 z-10">
          <button 
            onClick={toggleCountry}
            className="relative flex items-center bg-gray-200 rounded-full p-1 w-36 h-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Country"
          >
            <div 
              className={`w-1/2 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                selectedCountry === 'germany' ? 'translate-x-0' : 'translate-x-full'
              }`}
            />
            <span
              className={`absolute left-1.5 text-xs font-medium transition-colors ${
                selectedCountry === 'germany' ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              Germany
            </span>

            <span
              className={`absolute right-1.5 text-xs font-medium transition-colors ${
                selectedCountry === 'france' ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              France
            </span>
          </button>
        </div>



      <div className="space-y-12">
        {journeyData.map((stage, idx) => (
          <JourneyStage 
            key={idx}
            stage={stage}
            metrics={stage.metrics}
            barriers={stage.barriers}
            findings={stage.findings}
            selectedCountry = {selectedCountry}
          />
        ))}
      </div>

      {/* <EconomicImpact /> */}
    </div>
  );
};

export default NmosD;