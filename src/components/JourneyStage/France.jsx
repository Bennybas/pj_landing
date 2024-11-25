import React, { useState } from 'react';
import { Card } from '../ui/card';

import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp,
  Bold
} from 'lucide-react';
import SankeyDiagramG from '../sankey/sankeyDiagG';


const France = ({ stage, metrics, barriers, findings }) => {
  const [hoveredAction, setHoveredAction] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  const getChartData = () => {
    switch (stage.number) {
        case 1: {
            const motorFunctionData = [
              { name: 'Male', Type3: 26, Type4: 3 },
              { name: 'Female', Type3: 26, Type4: 3 },
              { name: 'Children', Type3: 11, Type4: 1 },
              { name: 'Teens', Type3: 24, Type4: 2 },
              { name: 'Adults', Type3: 38, Type4: 5 },
            ];
            return {
              type: 'line',
              motorFunctionData:motorFunctionData
            };
          }
    }
  };

  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const { type, title,} = chartConfig;

    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <SankeyDiagramG />
        </div>
      )
    }
    }

  const [hoveredSection, setHoveredSection] = useState(null);
  const getTranslateClass = (section) => {
    if (hoveredSection === 'metrics' && section !== 'metrics') return 'translate-x-3';
    if (hoveredSection === 'barriers') {
      if (section === 'metrics') return '-translate-x-3';
      if (section === 'opportunities') return 'translate-x-3';
    }
    if (hoveredSection === 'opportunities') {
      if (section === 'metrics' || section === 'barriers') return '-translate-x-3';
    }
    return '';
  };

  const renderLink = (link) => {
  if (!link) return null;



  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        marginLeft: "5px",
        padding: "2px 4px",
        borderRadius: "15px",
        fontSize: "10px",
        fontWeight: "bold",
        backgroundColor: "#9f9f9f",
        color: "#ffffff",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#000000")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#9f9f9f")}
    >
      {link.name || "link"}
    </a>
  );
};


  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200 transition-all duration-300 hover:shadow-xl">
        {/* Stage header and actions section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
              <span className="text-2xl font-bold text-white">{stage.number}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
              <p className="text-sm text-purple-700 mt-1">{stage.timeframe}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleInsights}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
            >
              Deep Dive
              {showInsights ? (
                <ChevronUp className="w-4 h-4 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{stage.description}</p>

        {/* Actions Flow */}
        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-purple-50 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Hovered Action Details */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 border border-purple-100">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>
      </Card>

      {showInsights && (
        <div className="mb-8">
          <Card className="bg-white rounded-lg shadow-lg p-6">
            {renderChartInsights()}
          </Card>
        </div>
      )}
      

      {/* Key Metrics, Barriers, and Findings Grid */}
      <div className="grid grid-cols-9 gap-6">
        {/* Key Metrics Section */}
        <div 
          className={`col-span-3 transition-transform duration-300 ease-in-out ${getTranslateClass('metrics')}`}
          onMouseEnter={() => setHoveredSection('metrics')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
              Impact Measures
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs leading-relaxed">
                    {metric.label ? (
                      <>
                        {metric.label}
                        {renderLink(metric.link)}
                      </>
                    ) : (
                      "No label available"
                    )}
                  </div>
                </div>
              ))}
            </div>

          </Card>
        </div>



        {/* Key Barriers Section */}
        <div 
          className={`col-span-6 transition-transform duration-300 ease-in-out ${getTranslateClass('barriers')}`}
          onMouseEnter={() => setHoveredSection('barriers')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Key Barriers
            </h3>
            <KeyBarriers barriers={barriers} />
          </Card>
        </div>
        
      </div>
      
      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
    </div>
  );
};
const KeyBarriers = ({ barriers }) => {
    const barrierColors = {
      physician: {
        background: 'bg-red-50',
        headerBg: 'bg-red-100',
        icon: 'text-red-600',
        borderColor: 'border-red-200'
      },
      system: {
        background: 'bg-blue-50',
        headerBg: 'bg-blue-100',
        icon: 'text-blue-600',
        borderColor: 'border-blue-200'
      },
      patient: {
        background: 'bg-green-50',
        headerBg: 'bg-green-100',
        icon: 'text-green-600',
        borderColor: 'border-green-200'
      }
    };
  
    return (
      <div className="space-y-6">
        {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => {
          const colors = barrierColors[key];
  
          return (
            <div 
              key={groupIdx} 
              className={`rounded-xl shadow-md overflow-hidden ${colors.background}`}
            >
              <div 
                className={`w-full flex items-center gap-3 px-5 py-4 ${colors.headerBg}`}
              >
                {key === 'physician' && <Stethoscope className={`w-5 h-5 ${colors.icon}`} />}
                {key === 'system' && <Building2 className={`w-5 h-5 ${colors.icon}`} />}
                {key === 'patient' && <User className={`w-5 h-5 ${colors.icon}`} />}
                <h3 className="text-base font-semibold capitalize text-gray-800">{key} Barriers</h3>
              </div>
  
              <div className={`p-5 border-t ${colors.borderColor}`}>
                <ul className="space-y-4">
                  {barrierGroup.map((barrier, idx) => (
                    <li 
                      key={idx} 
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-4">
                        {barrier.subpoints && (
                          <ul className="space-y-2">
                            {barrier.subpoints.map((subpoint, subIdx) => (
                              <li 
                                key={subIdx} 
                                className="flex items-center gap-2 text-sm text-gray-700"
                              >
                                <span className="text-purple-500 mt-0.5">•</span>
                                <div className="flex items-center">
                                  <span className="text-xs font-bold text-gray-700">
                                    {typeof subpoint === 'object' ? (
                                      <>
                                        {subpoint.text} 
                                        {subpoint.link && ( 
                                          <a
                                            href={subpoint.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 px-2 py-0.5 rounded-full bg-gray-400 text-white text-[10px] font-bold no-underline hover:bg-black transition-colors"
                                          >
                                            {subpoint.link.name || "link"}
                                          </a>
                                        )}
                                      </>
                                    ) : (
                                      subpoint
                                    )}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

export default France;