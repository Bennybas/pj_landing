import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Pie,PieChart, Cell, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

// Patient Entry Visualization
const SpecialistDiagnosisAccuracyChart = () => {
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h4 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        Diagnostic Accuracy by Medical Specialists
      </h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={specialistData}
          layout="vertical"
          margin={{ left: 20, right: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal />
          <XAxis type="number" />
          <YAxis dataKey="specialist" angle='-45'type="category" />
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
  );
};

// Diagnosis Pathway Visualization
const DiagnosisPathwayBarChart = () => {
  const pathwayData = [
    { name: 'Optic Neuritis', value: 33.39, color: '#3498db' },
    { name: 'Lumbar Puncture', value: 26.13, color: '#2ecc71' },
    { name: 'Acute Myelitis', value: 14.52, color: '#e74c3c' },
    { name: 'Symptomatic Cerebral', value: 7.26, color: '#9b59b6' },
    { name: 'Acute Brainstem ', value: 4.35, color: '#f39c12' },
    { name: 'Area Postrema', value: 2.90, color: '#1abc9c' },
    { name: 'Acute Diencephalic', value: 1.45, color: '#34495e' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Diagnosis Pathway Distribution</h3>
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
  );
};

// AQP4 Test Result Visualization
const AQP4TestResultDonutChart = () => {
  const testData = [
    { name: 'Positive AQP4 Result', value: 84, color: '#2ecc71' },
    { name: 'Negative AQP4 Result', value: 14, color: '#e74c3c' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        AQP4 Test Results Distribution
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={testData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}  // Creates donut effect
            outerRadius={120}
            paddingAngle={5}
            label={({name, percent}) => `${name} (${(percent * 100).toFixed(1)}%)`}
          >
            {testData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [`${value}%`, name]}
          />
          <Legend 
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Added insights section */}
      
    </div>
  );
};

// Main Composite Component
const PatientDiagnosisVisualizations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SpecialistDiagnosisAccuracyChart />
      <DiagnosisPathwayBarChart />
      <AQP4TestResultDonutChart />
    </div>
  );
};

export default PatientDiagnosisVisualizations;