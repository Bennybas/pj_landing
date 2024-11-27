import React, { useState } from 'react';
import { Card } from '../ui/card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, RadialBar,Text,RadialBarChart
} from 'recharts';
import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp,
  Bold,
  ImageOff
} from 'lucide-react';
import SankeyDiagramG from '../sankey/sankeyDiagG';
import TreatmentFlow from '../TreatmentFlow/Femaleflow.jsx'
import HorizontalTreeChartMale from '../TreatmentFlow/Maleflow.jsx'


const German = ({ stage, metrics, barriers, findings }) => {
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
        case 2: {

          const mriConfirmationData = [
            { category: "No", Percentage: 34.78 },
            { category: "Yes", Percentage: 65.22 },
          ];
         
          const aqp4PositivityData = [
            { AQP4_IgG_POSITIVE: "No", Female: 100.0, Male: 0.0 },
            { AQP4_IgG_POSITIVE: "Yes", Female: 65.625, Male: 34.375 },
          ];

          const Diagnosisdata =[
            { Diagnosis: 'Optic neuritis', Percentage: 37.10 },
            { Diagnosis: 'Lumber puncture', Percentage: 29.03 },
            { Diagnosis: 'Acute Myelitis', Percentage: 16.13 },
            { Diagnosis: 'Symptomatic cerebral syndrome', Percentage: 8.06 },
            { Diagnosis: 'Acute brainstem syndrome', Percentage: 4.84 },
            { Diagnosis: 'Area postrema syndrome', Percentage: 3.23 },
            { Diagnosis: 'Acute diencephalic clinical syndrome', Percentage: 1.61 },
          ];
          const complianceData = [
            { name: '2020', Compliant: 29.17, NonCompliant: 70.83 },
            { name: '2021', Compliant: 14.81, NonCompliant: 85.19 },
            { name: '2022', Compliant: 1.69, NonCompliant: 98.31 },
          ];          
          
          
          

          return{
            type:'bar',
            mriConfirmationData:mriConfirmationData,
            aqp4PositivityData:aqp4PositivityData,
            Diagnosisdata:Diagnosisdata,
            complianceData:complianceData
            
          }
        }
        case 3:{
          const treatmentNonoral =[
            { name: "Rituximab", percentage: 40.74 },
            { name: "Prednisolone", percentage: 14.91 },
            { name: "Methylprednisolon", percentage: 11.11 },
            { name: "Kortison", percentage: 11.11 },
            { name: "Cyclophosphamide", percentage: 7.39 },
            { name: "Soliris / eculizumab", percentage: 7.39 },
            { name: "Crystalloid", percentage: 7.39 }
          ];
          const oralTreatment = [
            { name: "Prednisolone", percentage: 38.56 },
            { name: "Kortison", percentage: 20.88 },
            { name: "Decortin", percentage: 12.57 },
            { name: "Steroide", percentage: 12.57 },
            { name: "Methylprednisolon", percentage: 8.3 },
            { name: "Azathioprine", percentage: 8.3 }
          ];
          
          // const relapse_rate = [
          //   { TreatmentName: 'Azathioprine', 'After treatment (%)': 100, 'Before treatment (%)': 0 },
          //   { TreatmentName: 'Crystalloid', 'After treatment (%)': 100, 'Before treatment (%)': 0 },
          //   { TreatmentName: 'Cyclophosphamide', 'After treatment (%)': 66.7, 'Before treatment (%)': 33.3 },
          //   { TreatmentName: 'Injektion', 'After treatment (%)': 100, 'Before treatment (%)': 0 },
          //   { TreatmentName: 'Kortison', 'After treatment (%)': 100, 'Before treatment (%)': 0 },
          //   { TreatmentName: 'Methylprednisolon', 'After treatment (%)': 40, 'Before treatment (%)': 60 },
          //   { TreatmentName: 'Prednisolone', 'After treatment (%)': 33.3, 'Before treatment (%)': 66.7 },
          //   { TreatmentName: 'Rituximab', 'After treatment (%)': 50, 'Before treatment (%)': 50 },
          //   { TreatmentName: 'Soliris / eculizumab', 'After treatment (%)': 0, 'Before treatment (%)': 100 },
          //   { TreatmentName: 'Tocilizumab', 'After treatment (%)': 0, 'Before treatment (%)': 100 },
          // ];
          const symptomSeverityGroupedData = [
            { AgeGroup: "Age[20-40]", Wheelchair: 0.0625, Sightloss: 0.25 },
            { AgeGroup: "Age[40-60]", Wheelchair: 0.2222, Sightloss: 0.5556 },
            { AgeGroup: "Age[60-80]", Wheelchair: 1.0, Sightloss: 1.0 },
          ];

          const Adherence = [
          
            { Adherence: 'Adherent Patient', Percentage: 88.10, fill: '#ffc658' },
            { Adherence: 'Non Adherent Patient', Percentage: 11.90, fill: '#a4de6c' }
          ];
          const relapseTimingData = [
            { category: "After treatment", Percentage: 57.45 },
            { category: "Before treatment", Percentage: 42.55 },
          ];

          const relapserate = [
            { year: 2019, rate: 0.3 },
            { year: 2020, rate: 0.375 },
            { year: 2021, rate: 0.49019607843137253 },
            { year: 2022, rate: 0.352112676056338 }
          ];
          return{
            type:'pie',
            treatmentNonoral:treatmentNonoral,
            oralTreatment:oralTreatment,
            Adherence:Adherence,
            symptomSeverityGroupedData:symptomSeverityGroupedData,
            relapseTimingData:relapseTimingData,
            relapserate:relapserate
          }
        }
    }
  };


  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const { type, title,mriConfirmationData,relapseTimingData,aqp4PositivityData,symptomSeverityGroupedData,treatmentNonoral,relapserate,oralTreatment,Adherence,Diagnosisdata,complianceData} = chartConfig;

    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <SankeyDiagramG />
        </div>
      )
      case 'bar':
        return(
          <div className="w-full space-y-6">

            <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-900">Female Treatment Flow</h4>
              < TreatmentFlow />
              </Card>
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-900">Male Treatment Flow</h4>
              < HorizontalTreeChartMale />
              </Card>
            </div>
           
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">MRI Confirmation Rates</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={mriConfirmationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" label={{ value: "MRI Confirmed", position: "insideBottom", offset: -5 }} />
                    <YAxis
                      label={{
                        value: "Percentage",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="Percentage" fill="#82ca9d" name="Percentage" />
                  </BarChart>
                </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">AQP4-IgG Positivity Rates by Gender</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={aqp4PositivityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="AQP4_IgG_POSITIVE" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />

                    {/* Bar for Female */}
                    <Bar
                      dataKey="Female"
                      fill="#ff9999" // Color for Female
                      name="Female"
                    />
                    
                    {/* Bar for Male */}
                    <Bar
                      dataKey="Male"
                      fill="#66b3ff" // Color for Male
                      name="Male"
                    />
                  </BarChart>
                </ResponsiveContainer>
                </div>
              </Card>

            </div>



            
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Diagnosis Distribution</h4>
                <div className="aspect-[4/3] w-full">

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={Diagnosisdata}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 1, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} label={{ value: 'Percentage (%)', position: 'insideBottom', offset: -5 }} />
                    <YAxis type="category" dataKey="Diagnosis" width={200} />
                    <Tooltip />
                    <Bar dataKey="Percentage" fill="#8884d8" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
                </div>
              </Card>
              


              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Compliance rate</h4>
              <div className="aspect-[4/3] w-full" style={{ width: '100%', height: '400px', backgroundColor: 'white', padding: '20px', boxSizing: 'border-box' }}>
              <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="100%"
          barSize={20}
          data={complianceData}
          startAngle={180}
          endAngle={0}
        >
          {/* Non-Compliant segment */}
          <RadialBar
            dataKey="NonCompliant"
            stackId="stack"
            fill="#f44336"
            minAngle={15}
            max={100}
            label={({ value, index }) => {
              const angle = (360 * value) / 100;
              return (
                <text
                  x="50%"
                  y="50%"
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ transform: `rotate(${angle - 90}deg)` }}
                >
                  {`${value.toFixed(2)}%`}
                </text>
              );
            }}
          />
          {/* Compliant segment */}
          <RadialBar
            dataKey="Compliant"
            stackId="stack"
            fill="#28a745"
            minAngle={15}
            max={100}
            label={({ value, index }) => {
              const angle = (360 * value) / 100;
              return (
                <text
                  x="50%"
                  y="50%"
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ transform: `rotate(${angle - 90}deg)` }}
                >
                  {`${value.toFixed(2)}%`}
                </text>
              );
            }}
          />
          <Tooltip
            formatter={(value, name, props) => {
              const yearName = props?.payload?.payload?.name || '';
              return [`${value}%`, `${yearName} ${name}`];
            }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #555',
              borderRadius: '8px',
              padding: '5px',
            }}
          />
          <Legend
            payload={[
              { value: 'Non-Compliant', type: 'square', color: '#f44336' },
              { value: 'Compliant', type: 'square', color: '#28a745' },
            ]}
            iconSize={10}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: '10px',
              fontSize: '12px',
              color: '#333',
            }}
          />

          {/* Year Labels - Adjust the vertical position to avoid overlap */}
          {complianceData.map((entry, index) => (
            <text
              key={entry.name}
              x="50%" // Center horizontally
              y={index * 35 + 50} // Adjusting the vertical position to prevent overlap
              fill="#333"
              fontSize="16px"
              textAnchor="middle"
              fontWeight="bold"
            >
              {entry.name}
            </text>
          ))}
        </RadialBarChart>
      </ResponsiveContainer>

              </div>
              </Card>
              
            </div>


          </div>
        )
        case 'pie':
        return(
          <div className="w-full space-y-6">
           
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Treatment Distribution (Non-Oral)</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={treatmentNonoral}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      label
                    >
                      {treatmentNonoral.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#82ca9d', '#8884d8', '#dce3f1', '#f8d7e3', '#f1c7b7','#ffc658','#a4de6c',
                          '#d0ed57',
                          '#ff8042',
                          '#8dd1e1', 
                          '#ffc0cb', 
                          '#adff2f', 
                          '#ffbb28', ][index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                </div>
              </Card>


              
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Treatment Distribution (Oral)</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={oralTreatment}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={150}
                      label
                    >
                      {oralTreatment.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#82ca9d', '#8884d8', '#dce3f1', '#f8d7e3', '#f1c7b7','#ffc658','#a4de6c',
                          '#d0ed57',
                          '#ff8042',
                          '#8dd1e1', 
                          '#ffc0cb', 
                          '#adff2f', 
                          '#ffbb28', ][index]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                </div>
              </Card>

            </div>


            <div className="grid grid-cols-3 gap-8">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Adherence Rate</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={Adherence}
                          cx="50%"
                          cy="50%"
                          innerRadius="60%"
                          outerRadius="80%"
                          paddingAngle={5}
                          dataKey="Percentage" // Correct data key for percentages
                          nameKey="Adherence" // Add the name key for tooltips and legends
                        >
                          {Adherence.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>

                        {/* Tooltip to display the correct percentage and treatment */}
                        <Tooltip
                          formatter={(value, _, props) => `${value}%`}
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                        />

                        {/* Adjusted Legend */}
                        <Legend
                          layout="horizontal"
                          align="center"
                          verticalAlign="bottom"
                          formatter={(value, entry) => entry.payload.Adherence}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                </div>
              </Card>


              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Wheelchair and Sightloss severity</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={symptomSeverityGroupedData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="AgeGroup" />
                  <YAxis label={{ value: 'Prevalence', angle: -90, position: 'insideLeft' }} /> {/* Added Y-axis label */}
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Wheelchair" name="Wheelchair" stackId="a" fill="#8884d8" />
                  <Bar dataKey="Sightloss" name="Sightloss" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              </div>
              </Card>

              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Relapse Timing Distribution</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={relapseTimingData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="category" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    {/* Using a static color for testing */}
                    <Bar
                      dataKey="Percentage"
                      fill="#ff8042"  // Static color for testing
                      name="Relapse Timing"
                    />
                  </BarChart>
                </ResponsiveContainer>


                </div>
              </Card>


              </div>
              <div className="grid grid-cols-3 gap-8">
                <Card className="p-6">
                <h4 className="text-sm font-medium text-gray-700">Relapse Rate</h4>
                  <div className="aspect-[4/3] w-full">
                  <ResponsiveContainer width="95%" height={400}>
                    <LineChart data={relapserate}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip  />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  </div>
                </Card>
              </div>

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

export default German;