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
import TreatmentSwitch from '../TreatmentFlow/Femaleflow.jsx'
import CircularBar from '../TreatmentFlow/Maleflow.jsx'


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
            { AQP4_IgG_POSITIVE: "No", Female: 6.64, Male:0 },
            { AQP4_IgG_POSITIVE: "Yes", Female: 93.36, Male: 100 },
          ];

          const Diagnosisdata =[
            { Diagnosis: "Acute Myelitis", Female: 80.00, Male: 20.00 },
            { Diagnosis: "Acute brainstem syndrome", Female: 100.00, Male: 0.00 },
            { Diagnosis: "Acute diencephalic clinical syndrome", Female: 100.00, Male: 0.00 },
            { Diagnosis: "Area postrema syndrome", Female: 50.00, Male: 50.00 },
            { Diagnosis: "Lumber puncture", Female: 72.22, Male: 27.78 },
            { Diagnosis: "Optic neuritis", Female: 73.91, Male: 26.09 },
            { Diagnosis: "Symptomatic cerebral syndrome", Female: 40.00, Male: 60.00 }
          ];

          const Diag_Age =[
            { Diagnosis: "Acute Myelitis", "0-19": 10.0, "20-39": 50.0, "40-59": 40.0, "60+": 0.0 },
            { Diagnosis: "Acute brainstem syndrome", "0-19": 33.33, "20-39": 33.33, "40-59": 33.33, "60+": 0.0 },
            { Diagnosis: "Acute diencephalic clinical syndrome", "0-19": 0.0, "20-39": 0.0, "40-59": 100.0, "60+": 0.0 },
            { Diagnosis: "Area postrema syndrome", "0-19": 0.0, "20-39": 50.0, "40-59": 50.0, "60+": 0.0 },
            { Diagnosis: "Lumber puncture", "0-19": 5.56, "20-39": 33.33, "40-59": 55.56, "60+": 5.56 },
            { Diagnosis: "Optic neuritis", "0-19": 8.7, "20-39": 47.83, "40-59": 39.13, "60+": 4.35 },
            { Diagnosis: "Symptomatic cerebral syndrome", "0-19": 0.0, "20-39": 40.0, "40-59": 60.0, "60+": 0.0 },
          ];
          const complianceData = [
            { name: '2020', Compliant: 29.17, NonCompliant: 70.83 },
            { name: '2021', Compliant: 14.81, NonCompliant: 85.19 },
            { name: '2022', Compliant: 1.69, NonCompliant: 98.31 },
          ];      
          
          const MisDiagnosis = [
            {
              name: 'Misdiagnosed Patients',
              timeToConfirm: 665.5,
              timeToStartDiagnosis: 91.6,
            },
            {
              name: 'Correctly Diagnosed Patients',
              timeToConfirm: 222.95,
              timeToStartDiagnosis: 49.1,
            },
          ];

          const specialistData = [
            {
              specialist: 'Neurologist',
              Patients: 68,
              correctDiagnosis: 44,
              misdiagnosed: 24,
            },
            {
              specialist: 'Ophthalmologist',
              Patients: 32,
              correctDiagnosis: 24,
              misdiagnosed: 8,
            }
          ];
          const pathwayData = [
            { name: 'Optic Neuritis', value: 33.39, color: '#3498db' },
            { name: 'Lumbar Puncture', value: 26.13, color: '#2ecc71' },
            { name: 'Acute Myelitis', value: 14.52, color: '#e74c3c' },
            { name: 'Symptomatic Cerebral', value: 7.26, color: '#9b59b6' },
            { name: 'Acute Brainstem ', value: 4.35, color: '#f39c12' },
            { name: 'Area Postrema', value: 2.90, color: '#1abc9c' },
            { name: 'Acute Diencephalic', value: 1.45, color: '#34495e' }
          ];
          const testData = [
            { name: 'Positive AQP4 Result', value: 84, color: '#2ecc71' },
            { name: 'Negative AQP4 Result', value: 16, color: '#e74c3c' },
          ];

          const correctPatientData = [
            { year: 2018, delay: 11.000000 },
            { year: 2019, delay: 102.000000 },
            { year: 2020, delay: 34.333333 },
            { year: 2021, delay: 9.000000 },
            { year: 2022, delay: 11.833333 }
          ];
        
          const misdiagnosisData = [
            { year: 2017, delay: 471.5 },
            { year: 2018, delay: 1048.0 },
            { year: 2021, delay: 185.0 }
          ];
        
          
          
          

          return{
            type:'bar',
            mriConfirmationData:mriConfirmationData,
            aqp4PositivityData:aqp4PositivityData,
            Diagnosisdata:Diagnosisdata,
            complianceData:complianceData,
            Diag_Age:Diag_Age,
            MisDiagnosis:MisDiagnosis,
            specialistData:specialistData,
            pathwayData:pathwayData,
            testData:testData,
            misdiagnosisData:misdiagnosisData,
            correctPatientData:correctPatientData
            
          }
        }
        case 3:{
          const treatmentNonoral =[
            { name: "Rituximab", percentage: 24.31 },
            { name: "Prednisolone", percentage: 10.19 },
            { name: "Methylprednisolon", percentage: 10.58 },
            { name: "Steroide", percentage: 4.7 },
            { name: "Soliris / eculizumab", percentage: 22.35 },
            { name: "Crystalloid", percentage: 11.76 }
          ];
          const oralTreatment = [
            { name: "Prednisolone", percentage: 39.85 },
            { name: "Kortison", percentage: 10.14 },
            { name: "Decortin", percentage: 7.24 },
            { name: "Steroide", percentage: 19.56 },
            { name: "Methylprednisolon", percentage: 4.34 },
            { name: "Azathioprine", percentage: 13.76 }
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
            { year: 2019, rate: 40.5 },
            { year: 2020, rate: 50.8 },
            { year: 2021, rate: 77.4 },
            { year: 2022, rate: 52.7 }
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

    const { type, title,Diag_Age,MisDiagnosis,aqp4PositivityData,specialistData,treatmentNonoral,relapserate,oralTreatment,Adherence,Diagnosisdata,complianceData,pathwayData,testData,correctPatientData,misdiagnosisData} = chartConfig;

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

            <div className="grid grid-cols-3 gap-8">
              <div className="p-6">
              <h4 className="text-sm font-medium text-gray-900"> Diagnostic Accuracy by Medical Specialists</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={400}>
                  <BarChart 
                    data={specialistData}
                    layout="vertical"
                    margin={{ left: 20, right: 20, bottom: 20 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" horizontal />
                    <XAxis type="number" />
                    <YAxis dataKey="specialist" angle='-55'type="category" />
                    <Tooltip 
                      formatter={(value, name, props) => {
                        switch(name) {
                          case 'correctDiagnosis': return [`${value}%`, 'Correct Diagnosis'];
                          case 'misdiagnosed': return [`${value}%`, 'Misdiagnosed'];
                          default: return [value, name];
                        }
                      }}
                    />
                    <Legend 
                      verticalAlign="top" 
                      layout="horizontal" 
                      align="center"
                    />
                    <Bar 
                      dataKey="correctDiagnosis" 
                      stackId="a" 
                      fill="#2ecc71" 
                      name="Correct Diagnosis"
                    />
                    <Bar 
                      dataKey="misdiagnosed" 
                      stackId="a" 
                      fill="#e74c3c" 
                      name="Misdiagnosed"
                    />
                  </BarChart>
                </ResponsiveContainer>

              </div>
              </div>

              <div className="p-6">
              <h4 className="text-sm font-medium text-gray-900"> Diagnosis Pathway Distribution</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={pathwayData}>
                  <XAxis dataKey="name" angle={-37} textAnchor="end" interval={0} height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3498db">
                    {pathwayData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              </div>
              </div>

              <div className="p-6 bg-white">
                <h4 className="text-sm font-medium text-gray-900 mb-4">
                  AQP4 Test Results Distribution
                </h4>
                <div className="aspect-[4/3] w-full relative">
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={testData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={80}  // Reduced inner radius
                        outerRadius={130} // Increased outer radius
                        paddingAngle={5}
                        startAngle={90}   // Explicitly set start angle
                        endAngle={-270}   // Explicitly set end angle
                        
                      >
                        {testData.map((entry) => (
                          <Cell 
                            key={entry.name} 
                            fill={entry.color} 
                            stroke="#ffffff"  // White border to ensure visibility
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f5f5f5', 
                          border: '1px solid #d5d5d5' 
                        }}
                        formatter={(value, name) => [`${value}%`, name]}
                      />
                      <Legend 
                        layout="centre"
                        verticalAlign="bottom"
                        align="right"
                        iconType="circle"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Time Delays in NMOSD Diagnosis</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height="100%">
                  <LineChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      type="number" 
                      domain={[2017, 2022]} 
                      tickFormatter={(value) => value.toString()}
                    />
                    <YAxis label={{ value: 'Delay', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      labelFormatter={(label) => `Year: ${label}`}
                      formatter={(value, name) => [value, name]}
                    />
                    <Legend />
                    <Line 
                      data={misdiagnosisData} 
                      dataKey="delay" 
                      name="Misdiagnosis Delay" 
                      stroke="#FF6384" 
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      data={correctPatientData} 
                      dataKey="delay" 
                      name="Correct Patient Delay" 
                      stroke="#36A2EB" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              </Card>


              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Compliance rate</h4>
              <div className="aspect-[4/3] w-full" style={{ width: '100%', height: '400px', backgroundColor: 'white', padding: '20px', boxSizing: 'border-box' }}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={complianceData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [`${value.toFixed(2)}%`, name]}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="Compliant" 
                    stroke="#28a745" 
                    strokeWidth={3}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="NonCompliant" 
                    stroke="#f44336" 
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>

              </div>
              </Card>



              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">AQP4-IgG Positivity Rates by Gender</h4>
                <div className="aspect-[4/3] w-full" style={{ width: '100%', height: '400px', backgroundColor: 'white', padding: '20px', boxSizing: 'border-box' }}>
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
           
            {/* <div className="grid grid-cols-2 gap-8">
            <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Diagnosis Distribution By Gender</h4>
                <div className="aspect-[4/3] w-full">

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={Diagnosisdata}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Diagnosis" />
                    <YAxis />
                    <Tooltip  />
                    <Legend />

                    <Bar dataKey="Female" stackId="a" fill="#8884d8" />
                    <Bar dataKey="Male" stackId="a" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Diagnosis Distribution Percentage by Age Category</h4>
                <div className="aspect-[4/3] w-full">


                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={Diag_Age} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Diagnosis" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    
                    
                    <Bar dataKey="Below0" stackId="a" fill="#8884d8" />
                    <Bar dataKey="0-19" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="20-39" stackId="a" fill="#ffc658" />
                    <Bar dataKey="40-59" stackId="a" fill="#d0ed57" />
                    <Bar dataKey="60+" stackId="a" fill="#ff7300" />
                  </BarChart>
                </ResponsiveContainer>
                </div>
              </Card>

            </div> */}



          </div>
        )
        case 'pie':
        return(
          <div className="w-full space-y-6">

            <div className="grid grid-cols-1 gap-8">
            <h3 className="text-sm font-medium text-gray-900" style={{textAlign:'center',fontSize:'25px'}}> Treatment Flow</h3>
              <div className="p-6" style={{marginBottom:'200px'}}>
              < CircularBar percentage={68} percentage1={88}  percentage2={56} percentage3={32} percentage4={24}  />
              </div>
            </div>
           
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


            <div className="grid grid-cols-2 gap-8">
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


              {/* <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Wheelchair and Sightloss severity</h4>
              <div className="aspect-[4/3] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={symptomSeverityGroupedData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="AgeGroup" />
                  <YAxis label={{ value: 'Prevalence', angle: -90, position: 'insideLeft' }} /> 
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Wheelchair" name="Wheelchair" stackId="a" fill="#8884d8" />
                  <Bar dataKey="Sightloss" name="Sightloss" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              </div>
              </Card> */}

              <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700">Relapse Timing Distribution</h4>
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
                {/* <ResponsiveContainer width="100%" height={300}>
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
                    
                    <Bar
                      dataKey="Percentage"
                      fill="#ff8042"  
                      name="Relapse Timing"
                    />
                  </BarChart>
                </ResponsiveContainer> */}


                </div>
              </Card>


              </div>

              <div className="grid grid-cols-1 gap-6">
              < TreatmentSwitch />
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
    <Card className="bg-gradient-to-r from-[#c98b27]/10 via-[#9bc0e2]/20 to-[#c98b27]/10 p-6 mb-6 shadow-lg rounded-lg border border-[#004567]/30 transition-all duration-300 hover:shadow-xl">
      {/* Stage header and actions section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#004567] flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
            <span className="text-2xl font-bold text-white">{stage.number}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#c98b27]">{stage.title}</h2>
            <p className="text-sm text-[#8295ae] mt-1">{stage.timeframe}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={toggleInsights}
            className="flex items-center gap-2 bg-[#004567] text-white px-4 py-2 rounded-lg hover:bg-[#004567] transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
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

      <p className="text-[#004567]/80 mb-6 leading-relaxed">{stage.description}</p>

      {/* Actions Flow */}
      <div className="flex items-center gap-4 mb-6">
        {stage.actions.map((action, idx) => (
          <React.Fragment key={idx}>
            <div
              className="flex-1 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#9bc0e2]/10 cursor-pointer transform hover:-translate-y-1"
              onMouseEnter={() => handleActionHover(action.name)}
              onMouseLeave={handleActionLeave}
            >
              <div className="text-sm font-medium text-[#c98b27]">{action.name}</div>
            </div>
            {idx < stage.actions.length - 1 && (
              <ArrowRight className="w-6 h-6 text-[#8295ae] flex-shrink-0 animate-pulse" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Hovered Action Details */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {hoveredAction && (
          <div className="bg-[#9bc0e2]/10 p-4 rounded-lg shadow-inner mt-4 border border-[#004567]/20">
            <h3 className="text-[#c98b27] font-semibold mb-2">
              {hoveredAction}
            </h3>
            <p className="text-[#004567]/80 text-sm leading-relaxed">
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
        <Card className="h-full p-5 bg-gradient-to-b from-[#9bc0e2]/10 to-[#8295ae]/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-semibold text-[#004567] mb-3 flex items-center gap-2">
            <LineChartIcon className="w-4 h-4" />
            Impact Measures
          </h3>
          <div className="space-y-3">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-xl font-bold text-[#c98b27]">{metric.value}</div>
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
          <h3 className="font-semibold mb-3 text-[#004567] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#c98b27]" />
            Key Barriers
          </h3>
          <KeyBarriers barriers={barriers} />
        </Card>
      </div>
    </div>
    
    <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-[#8295ae]" />
  </div>
);
};

const KeyBarriers = ({ barriers }) => {
const barrierColors = {
  physician: {
    background: 'bg-[#9bc0e2]/10',
    headerBg: 'bg-[#c98b27]/20',
    icon: 'text-[#c98b27]',
    borderColor: 'border-[#c98b27]/30'
  },
  system: {
    background: 'bg-[#9bc0e2]/10',
    headerBg: 'bg-[#c98b27]/20',
    icon: 'text-[#c98b27]',
    borderColor: 'border-[#c98b27]/30'
  },
  patient: {
    background: 'bg-[#9bc0e2]/10',
    headerBg: 'bg-[#c98b27]/20',
    icon: 'text-[#c98b27]',
    borderColor: 'border-[#c98b27]/30'
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
            <h3 className="text-base font-semibold capitalize text-[#004567]">{key} Barriers</h3>
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
                            className="flex items-center gap-2 text-sm text-[#004567]"
                          >
                            <span className="text-[#c98b27] mt-0.5">•</span>
                            <div className="flex items-center">
                              <span className="text-xs font-bold text-[#004567]">
                                {typeof subpoint === 'object' ? (
                                  <>
                                    {subpoint.text} 
                                    {subpoint.link && ( 
                                      <a
                                        href={subpoint.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 px-2 py-0.5 rounded-full bg-[#8295ae] text-white text-[10px] font-bold no-underline hover:bg-[#004567] transition-colors"
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