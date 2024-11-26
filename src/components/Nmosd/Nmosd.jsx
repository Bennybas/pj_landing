import React, {useState} from 'react';
import JourneyStage from '../JourneyStage/JourneyStage';
import EconomicImpact from '../EconomicImpact/EconomicImpact';
import { journeyData } from '../../Germandata/journeyData';



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
            className="relative flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 w-40 h-10 shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle Country"
          >
            {/* Sliding background */}
            <div 
              className={`absolute inset-0 bg-blue-100 rounded-full transform transition-all duration-300 ${
                selectedCountry === 'germany' ? 'translate-x-0 w-1/2' : 'translate-x-full w-1/2'
              }`}
            />

            {/* Sliding toggle */}
            <div 
              className={`absolute z-10 w-1/2 h-7 bg-white rounded-full shadow-md transform transition-transform ease-in-out duration-300 ${
                selectedCountry === 'germany' ? 'translate-x-0' : 'translate-x-full'
              }`}
            />

            {/* Germany Label */}
            <span
              className={`relative z-20 w-1/2 text-center text-xs font-semibold transition-colors duration-300 ${
                selectedCountry === 'germany' ? 'text-blue-800' : 'text-gray-500'
              }`}
            >
              Germany
            </span>

            {/* France Label */}
            <span
              className={`relative z-20 w-1/2 text-center text-xs font-semibold transition-colors duration-300 ${
                selectedCountry === 'france' ? 'text-blue-800' : 'text-gray-500'
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