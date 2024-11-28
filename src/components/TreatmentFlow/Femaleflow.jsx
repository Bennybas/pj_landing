import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

const PatientDiagnosisSankeyChart = () => {
  const [currentView, setCurrentView] = useState('initial');
  const svgRef = useRef(null);

  // Detailed patient flow data with expanded breakdowns (unchanged)
  const flowData = {
    initial: {
      nodes: [
        { name: 'Total Patients', value: 100 },
        { name: 'Avoiding Diagnosis', value: 3 },
        { name: 'Financial Constraints', value: 3 },
        { name: 'Different Symptoms', value: 4 },
        { name: 'Diagnosis Pathway', value: 90 },
        { name: 'AQP4_IgG Test', value: 90 },
        { name: 'Positive Result', value: 84 }
      ],
      links: [
        { source: 0, target: 1, value: 3 }, // Avoiding Diagnosis
        { source: 0, target: 2, value: 4 }, // Different Symptoms
        { source: 0, target: 3, value: 3 }, // Financial Constraints
        { source: 0, target: 4, value: 90 }, // Diagnosis Pathway
        { source: 4, target: 5, value: 90 }, // AQP4_IgG Test
        { source: 5, target: 6, value: 84 }  // Positive Result
      ]
    },    
    diagnosisOptions: {
      nodes: [
        { name: 'Total Patients', value: 100 },
        { name: 'Avoiding Diagnosis', value: 3 },
        { name: 'Different Symptoms', value: 4 },
        { name: 'Financial Constraints', value: 3 },
        { name: 'Diagnosis Pathway', value: 90 }
      ],
      links: [
        { source: 0, target: 1, value: 3 },
        { source: 0, target: 2, value: 4 },
        { source: 0, target: 3, value: 3 },
        { source: 0, target: 4, value: 90 }
      ]
    },
    diagnosisPathway: {
      nodes: [
        { name: 'Diagnosis Pathway', value: 90 },
        { name: 'Optic Neuritis', value: 33.39 },
        { name: 'Lumbar Puncture', value: 26.13 },
        { name: 'Acute Myelitis', value: 14.52 },
        { name: 'Symptomatic Cerebral Syndrome', value: 7.26 },
        { name: 'Acute Brainstem Syndrome', value: 4.35 },
        { name: 'Area Postrema Syndrome', value: 2.90 },
        { name: 'Acute Diencephalic Syndrome', value: 1.45 },
        { name: 'MRI', value: 90 },
        { name: 'AQP4_IgG Test', value: 90 }
      ],
      links: [
        { source: 0, target: 1, value: 34.39 },
        { source: 0, target: 2, value: 27.13 },
        { source: 0, target: 3, value: 18.52 },
        { source: 0, target: 4, value: 8.26 },
        { source: 0, target: 5, value: 5.35 },
        { source: 0, target: 6, value: 3.90 },
        { source: 0, target: 7, value: 2.45 },
        { source: 1, target: 8, value: 33.39 },
        { source: 2, target: 8, value: 26.13 },
        { source: 3, target: 8, value: 1.52 },
        { source: 4, target: 8, value: 7.26 },
        { source: 5, target: 8, value: 4.35 },
        { source: 6, target: 8, value: 2.90 },
        { source: 7, target: 8, value: 1.45 },
        { source: 8, target: 9, value: 90 }
      ]      
    },
    
    aqp4Test: {
      nodes: [
        { name: 'AQP4_IgG Test', value: 84 },
        { name: 'Positive AQP4 Result', value: 73 },
        { name: 'Negative AQP4 Result', value: 10 }
      ],
      links: [
        { source: 0, target: 1, value: 84 },
        { source: 0, target: 2, value: 6 }
      ]
    }
  };

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up SVG dimensions with more width
    const margin = { top: 20, right: 100, bottom: 20, left: 20 };
    const width = 1100 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Enhanced color palette with soft gradients
    const colorPalette = [
      { base: "#3498db", gradient: "#2980b9" },   // Soft blue
      { base: "#2ecc71", gradient: "#27ae60" },   // Soft green
      { base: "#e74c3c", gradient: "#c0392b" },   // Soft red
      { base: "#f39c12", gradient: "#d35400" },   // Soft orange
      { base: "#9b59b6", gradient: "#8e44ad" },   // Soft purple
      { base: "#1abc9c", gradient: "#16a085" },   // Soft teal
      { base: "#34495e", gradient: "#2c3e50" }    // Dark blue-gray
    ];

    // Color scale with more nuanced color handling
    const color = d3.scaleOrdinal()
      .domain([
        'Total Patients', 'Diagnosis Pathway', 'Avoiding Diagnosis', 
        'Different Symptoms', 'Financial Constraints', 'AQP4_IgG Test', 
        'Positive AQP4 Result', 'Positive Result', 'Negative AQP4 Result',
        'Optic Neuritis', 'Acute Myelitis', 
        'Area Postrema Syndrome', 'Acute Brainstem Syndrome', 
        'Symptomatic Narcolepsy', 'Acute Diencephalic Syndrome', 
        'Symptomatic Cerebral Syndrome', 'Lumbar Puncture', 'MRI'
      ])
      .range(colorPalette.map(c => c.base));

    // Sankey generator with adjusted spacing
    const sankeyGenerator = sankey()
      .nodeWidth(20)
      .nodePadding(20)  // Increased padding to prevent overlapping
      .size([width, height]);

    // Current view data
    const currentData = flowData[currentView];

    // Prepare sankey data
    const sankeyData = sankeyGenerator({
      nodes: currentData.nodes.map(d => ({ ...d })),
      links: currentData.links.map(d => ({ ...d }))
    });

    // Create gradient definitions
    const defs = svg.append("defs");
    colorPalette.forEach((c, i) => {
      const gradient = defs.append("linearGradient")
        .attr("id", `grad${i}`)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%");
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", c.base);
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", c.gradient);
    });

    // Create links with soft opacity and gradients
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.3)
      .selectAll("path")
      .data(sankeyData.links)
      .enter().append("path")
        .attr("d", sankeyLinkHorizontal())
        .attr("stroke-width", d => Math.max(1, d.width))
        .attr("stroke", d => color(d.target.name));

    // Create nodes with subtle hover effect and gradient
    const node = svg.append("g")
      .selectAll("rect")
      .data(sankeyData.nodes)
      .enter().append("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr("fill", d => `url(#grad${colorPalette.findIndex(c => c.base === color(d.name))})`)
        .attr("rx", 4)  // Rounded corners
        .attr("ry", 4)
        .style("cursor", "pointer")
        .style("transition", "all 0.2s ease")
        .on("mouseenter", function() {
          d3.select(this)
            .attr("opacity", 0.8);
        })
        .on("mouseleave", function() {
          d3.select(this)
            .attr("opacity", 1);
        })
        .on("click", (event, d) => {
          console.log("Node clicked:", d.name);
          switch(d.name) {
            case "Total Patients":
              setCurrentView('diagnosisOptions');
              break;
            case "Diagnosis Pathway":
              setCurrentView('diagnosisPathway');
              break;
            case "AQP4_IgG Test":
              setCurrentView('aqp4Test');
              break;
            default:
              setCurrentView('initial');
          }
        });

    // Enhanced node labels with shadow and better positioning
    svg.append("g")
      .selectAll("text")
      .data(sankeyData.nodes)
      .enter().append("text")
        .attr("x", d => d.x0 < width / 2 ? d.x1 + 10 : d.x0 - 10)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
        .text(d => `${d.name} (${d.value}%)`)  // Added percentage symbol
        .attr("font-size", "12px")
        .attr("font-weight", "500")
        .attr("fill", "#2c3e50")
        .attr("text-shadow", "1px 1px 2px rgba(0,0,0,0.1)");

  }, [currentView]);

  const handleResetView = () => {
    setCurrentView('initial');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
        Patient Diagnosis Flow 
        {currentView !== 'initial' && (
          <button 
            onClick={handleResetView} 
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Back to Main Flow
          </button>
        )}
      </h2>
      
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PatientDiagnosisSankeyChart;