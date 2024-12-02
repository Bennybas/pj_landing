import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Brain, Activity, Eye, User, Bell, Search, ChevronLeft, Pill } from 'lucide-react';  // Import the new icon (e.g., Pill)

const PatientJourneyLanding = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // Add loading state

  const regions = {
    US: {
      name: 'United States',
      color: 'bg-gradient-to-br from-[#c98b27] to-[#004567]',
      textColor: '#004567',
      indications: [
        {
          name: 'Alzheimer Disease',
          icon: Brain,
          gradient: 'from-[#004567] to-[#004567]',
          description: 'Compassionate cognitive health support',
          onClick: () => handleRedirect('https://alzheimers-patient-journey-6uah.onrender.com/'), 
        },
        {
          name: 'Spinal Muscular Atrophy (SMA)',
          icon: Activity,
          gradient: 'from-[#9bc0e2] to-[#c98b27]',
          description: 'Advanced neuromuscular care solutions',
          onClick: () => handleRedirect('https://sma-patient-journey-v2.onrender.com')
        },
      ],
    },
    EU: {
      name: 'European Union',
      color: 'bg-gradient-to-br from-[#004567] to-[#9bc0e2]',
      textColor: '#004567',
      indications: [
        {
          name: 'Neuromyelitis Optica Spectrum Disorder (NMOSD)',
          icon: Eye,
          gradient: 'from-[#c98b27] to-[#8295ae]',
          description: 'Specialized neuroimmunological disorder support',
          onClick: () => handleRedirect('https://nmosd-patient-journey.onrender.com/')
        },
      ],
    },
  };

  const handleRegionClick = (key) => {
    setSelectedRegion(key);
    setRevealed(true);
    setTimeout(() => setRevealed(false), 1000);
  };

  const handleRedirect = (url) => {
    setIsLoading(true);  // Trigger the loading effect
    setTimeout(() => {
      window.location.href = url;
    }, 1000);  
  };

  return (
    <div className="min-h-screen bg-[#9bc0e2] text-[#004567]">
      {/* Header */}
      <div className="bg-[#c98b27] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-32 h-32 bg-[#004567] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="img/teams_bg_d7_1-removebg.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold">Patient Journey Portal</h1>
          </div>
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-white" />
            <Bell className="w-5 h-5 text-white" />
            <div className="bg-[#8295ae] p-2 rounded-full">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#004567]">Patient Journey Insights</h2>
          <p className="text-xl text-[#004567] opacity-80">
            Comprehensive patient support across regions and therapeutic areas
          </p>
        </div>

        {/* Region Selection */}
        {!selectedRegion && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(regions).map(([key, region]) => (
              <div
                key={key}
                className={`relative transform transition-all hover:scale-105 ${region.color} overflow-hidden cursor-pointer shadow-2xl rounded-2xl`}
                onClick={() => handleRegionClick(key)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-gray-200 animate-reveal ${revealed ? 'reveal' : ''}`}
                ></div>
                <CardContent className="relative p-8">
                  <div className={`text-center ${region.textColor}`}>
                    <h2 className="text-2xl font-semibold mb-2">{region.name}</h2>
                    <p className="text-lg opacity-90">{region.indications.length} Therapeutic Areas</p>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        )}

        {/* Indications Display */}
        {selectedRegion && (
          <div className="space-y-6">
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-[#004567] hover:text-[#c98b27] flex items-center space-x-2 font-medium mb-4"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Regions</span>
            </button>
            <div className="grid grid-cols-1 gap-6">
              {regions[selectedRegion].indications.map((indication, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all hover:scale-105 bg-gradient-to-r ${indication.gradient} rounded-2xl shadow-2xl p-6 cursor-pointer`}
                  onClick={indication.onClick} // Use onClick here
                >
                  <div className="flex items-center text-white space-x-6">
                    <indication.icon className="w-16 h-16 opacity-80" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{indication.name}</h3>
                      <p className="text-lg opacity-90">{indication.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Loading Spinner with a different icon (Pill icon) */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-3xl flex items-center space-x-4">
            <Pill className="animate-spin w-12 h-12" /> {/* Use the rotating Pill icon */}
            <span>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientJourneyLanding;
