import React from 'react';

const CircularBar = ({ 
  outerRadius = 80, 
  arcWidth = 25, 
  percentage_def = 75,
  percentage_def1 =30,
  percentage=percentage,
  percentage1=percentage1,
  percentage2=percentage2,
  percentage3=percentage3,
  percentage4=percentage4,
  title = "Progress", 
  plateColor = "#F0F0F0",  // Light gray plate color
  plateStyle = "plate" ,   
}) => {
  // Calculate arc length based on percentage
  const arcLength = 2 * Math.PI * (percentage / 100);

  // Semicircle path calculation with gap adjustment
  const gap = 8;  // Small gap between semicircle and circular progress bar
  const adjustedRadius = outerRadius + gap;  // Adjust outer radius to create gap
  const semicirclePath = `
    M ${outerRadius - adjustedRadius},${outerRadius}
    A ${adjustedRadius} ${adjustedRadius} 0 0 1 ${outerRadius + adjustedRadius},${outerRadius}
  `;
  const semicirclePathB = `
    M ${outerRadius - adjustedRadius},${outerRadius}
    A ${adjustedRadius} ${adjustedRadius} 0 0 0 ${outerRadius + adjustedRadius},${outerRadius}
  `;

  // Plate style rendering options
  const renderPlateStyle = () => {
    switch (plateStyle) {
      case "gradient":
        return (
          <defs>
            <radialGradient id="plateGradient">
              <stop offset="10%" stopColor={plateColor} stopOpacity="0.9"/>
              <stop offset="95%" stopColor={plateColor} stopOpacity="0.7"/>
            </radialGradient>
          </defs>
        );
      case "shaded":
        return (
          <filter id="plateShading" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="shadow"/>
            <feOffset dx="1" dy="2"/>
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0"/>
          </filter>
        );
      default:
        return null;
    }
  };

  

  return (
    <div className="flex justify-center items-center space-x-8" style={{ marginTop:'10px', marginLeft:'-50px'}}>
     
     {/* First Circular Progress Bar */}
      <div className="relative" style={{  width: '160px', height: '200px', overflow: 'visible' ,marginTop:'20px' }}>
      <svg viewBox="10 -80 200 360" width="300" height="360">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="5"
          refX="0"
          refY="2.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 8 2.5 L 0 5 Z" fill="#0286C2" />
        </marker>
      </defs>

          {/* Plate style rendering */}
          {renderPlateStyle()}

          {/* Outer yellow circle */}
          <circle cx="80" cy="80" r="80" fill="#FFCA28" />

          {/* Inner plate circle with conditional styling */}
          <circle 
            cx="80" 
            cy="80" 
            r="50" 
            fill={plateStyle === "gradient" ? "url(#plateGradient)" : plateStyle === "shaded" ? plateColor : plateColor}
            filter={plateStyle === "shaded" ? "url(#plateShading)" : undefined}
          />

          {/* Semicircle Outer Line with gap */}
          <path
            d={semicirclePath}
            fill="none"
            stroke="#0286C2"
            strokeWidth="3"
            marker-end="url(#arrowhead)"
          />
          

          {/* Circular progress bar */}
          <path
            d={`M 80,30
                A 50 50 0 ${percentage_def > 50 ? 1 : 0} 1 
                ${80 + 50 * Math.sin(2 * Math.PI * (percentage / 100))} 
                ${80 - 50 * Math.cos(2 * Math.PI * (percentage / 100))}`}
            fill="none"
            stroke="#b5aeae"
            strokeWidth={arcWidth}
          />


          {/* Title text below the circle */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fill="#0286C2"
            fontSize="30"
            fontWeight="bold"
          >
            68%
          </text>

          {/* Connecting Line and Text Above the Circle */}
          <g>
            {/* Connecting Line */}
            <line 
              x1="80" 
              y1="-10" 
              x2="80" 
              y2="-40" 
              stroke="#0286C2" 
              strokeWidth="3" 
            />

            {/* Text Above the Circle */}
            <text 
              x="80" 
              y="-65" 
              fill="#0f0606" 
              fontSize="14" 
              fontWeight="bold"
            >
              <tspan x="0" dy="0"  fontSize="12" fill="#666666" fontWeight="400">( Corticosteroids,Plasmapheresis, Crystalloid )</tspan>
             <tspan x="0" dy="20">Acute Anti-Inflammatory Therapies</tspan>
             
            </text>
          </g>
        </svg>
      </div>

      {/* Second Circular Progress Bar */}
      <div className="relative" style={{  width: '160px', height: '200px', overflow: 'visible' ,marginTop:'20px' }}>
      <svg viewBox="10 -80 200 360" width="300" height="360">
        
          {/* Plate style rendering */}
          {renderPlateStyle()}

          {/* Outer yellow circle */}
          <circle cx="80" cy="80" r="80" fill="#FFCA28" />

          {/* Inner plate circle with conditional styling */}
          <circle 
            cx="80" 
            cy="80" 
            r="50" 
            fill={plateStyle === "gradient" ? "url(#plateGradient)" : plateStyle === "shaded" ? plateColor : plateColor}
            filter={plateStyle === "shaded" ? "url(#plateShading)" : undefined}
          />

          {/* Semicircle Outer Line with gap */}
          <path
            d={semicirclePathB}
            fill="none"
            stroke="#0286C2"
            strokeWidth="3"
            marker-end="url(#arrowhead)"
          />

          {/* Circular progress bar */}
          <path
            d={`M 80,30
                A 50 50 0 ${percentage_def > 50 ? 1 : 0} 1 
                ${80 + 50 * Math.sin(2 * Math.PI * (percentage1 / 100))} 
                ${80 - 50 * Math.cos(2 * Math.PI * (percentage1 / 100))}`}
            fill="none"
            stroke="#b5aeae"
            strokeWidth={arcWidth}
          />


          {/* Title text below the circle */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fill="#0286C2"
            fontSize="30"
            fontWeight="bold"
          >
            88%
          </text>

          {/* Connecting Line and Text Above the Circle */}
          <g>
            {/* Connecting Line */}
            <line 
              x1="80" 
              y1="170" 
              x2="80" 
              y2="210" 
              stroke="#0286C2" 
              strokeWidth="3" 
            />

            {/* Text Above the Circle */}
            <text 
              x="80" 
              y="225" 
              
              fill="#0f0606" 
              fontSize="14" 
              fontWeight="bold"
            >
              <tspan x="10" dy="0">Second-line Therapy</tspan>
              <tspan x="-10" dy="20" fontSize="12" fill="#666666" fontWeight="400"> ( Rituximab, Cyclophosphamide,</tspan>
              <tspan x="0" dy="20" fontSize="12" fill="#666666" fontWeight="400">  Tacrolimus, Azathioprine )</tspan>
            </text>
          </g>
        </svg>
      </div>



      {/* ThirdBar */}

     
      <div className="relative" style={{  width: '160px', height: '200px', overflow: 'visible' ,marginTop:'20px' }}>
      <svg viewBox="10 -80 200 360" width="300" height="360">
          {/* Plate style rendering */}
          {renderPlateStyle()}

          {/* Outer yellow circle */}
          <circle cx="80" cy="80" r="80" fill="#FFCA28" />

          {/* Inner plate circle with conditional styling */}
          <circle 
            cx="80" 
            cy="80" 
            r="50" 
            fill={plateStyle === "gradient" ? "url(#plateGradient)" : plateStyle === "shaded" ? plateColor : plateColor}
            filter={plateStyle === "shaded" ? "url(#plateShading)" : undefined}
          />

          {/* Semicircle Outer Line with gap */}
          <path
            d={semicirclePath}
            fill="none"
            stroke="#0286C2"
            strokeWidth="3"
            marker-end="url(#arrowhead)"
          />

          {/* Circular progress bar */}
          <path
            d={`M 80,30
                A 50 50 0 ${percentage_def > 50 ? 1 : 0} 1 
                ${80 + 50 * Math.sin(2 * Math.PI * (percentage2 / 100))} 
                ${80 - 50 * Math.cos(2 * Math.PI * (percentage2 / 100))}`}
            fill="none"
            stroke="#b5aeae"
            strokeWidth={arcWidth}
          />

          
          {/* Title text below the circle */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fill="#0286C2"
            fontSize="30"
            fontWeight="bold"
          >
           56%
          </text>

          {/* Connecting Line and Text Above the Circle */}
          <g>
            {/* Connecting Line */}
            <line 
              x1="80" 
              y1="-10" 
              x2="80" 
              y2="-40" 
              stroke="#0286C2" 
              strokeWidth="3" 
            />

            {/* Text Above the Circle */}
            <text 
              x="80" 
              y="-65" 
              fill="#0f0606" 
              fontSize="14" 
              fontWeight="bold"
            >
              <tspan x="0" dy="0" fontSize="12" fill="#666666" fontWeight="400"> ( Eculizumab-Soliris, Tocilizumab )</tspan>
             <tspan x="0" dy="20">Third Line Therapy</tspan>
            </text>
          </g>
        </svg>
      </div>



      {/* Fourth Bar */}
     
      <div className="relative" style={{  width: '160px', height: '200px', overflow: 'visible' ,marginTop:'20px' }}>
      <svg viewBox="10 -80 200 360" width="300" height="360">
          {/* Plate style rendering */}
          {renderPlateStyle()}

          {/* Outer yellow circle */}
          <circle cx="80" cy="80" r="80" fill="#FFCA28" />

          {/* Inner plate circle with conditional styling */}
          <circle 
            cx="80" 
            cy="80" 
            r="50" 
            fill={plateStyle === "gradient" ? "url(#plateGradient)" : plateStyle === "shaded" ? plateColor : plateColor}
            filter={plateStyle === "shaded" ? "url(#plateShading)" : undefined}
          />

          {/* Semicircle Outer Line with gap */}
          <path
            d={semicirclePathB}
            fill="none"
            stroke="#0286C2"
            strokeWidth="3"
            marker-end="url(#arrowhead)"
          />

          {/* Circular progress bar */}
          <path
            d={`M 80,30
                A 50 50 0 ${percentage_def1 > 50 ? 1 : 0} 1 
                ${80 + 50 * Math.sin(2 * Math.PI * (percentage_def1 / 100))} 
                ${80 - 50 * Math.cos(2 * Math.PI * (percentage_def1 / 100))}`}
            fill="none"
            stroke="#b5aeae"
            strokeWidth={arcWidth}
          />

          {/* Title text below the circle */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fill="#0286C2"
            fontSize="30"
            fontWeight="bold"
          >
            32%
          </text>

          {/* Connecting Line and Text Above the Circle */}
          <g>
            {/* Connecting Line */}
            <line 
              x1="80" 
              y1="170" 
              x2="80" 
              y2="210" 
              stroke="#0286C2" 
              strokeWidth="3" 
            />

            {/* Text Above the Circle */}
            <text 
              x="80" 
              y="225" 
              
              fill="#0f0606" 
              fontSize="14" 
              fontWeight="bold"
            >
              <tspan x="0" dy="0">Comprehensive Supportive Care</tspan>
              
            </text>
          </g>
        </svg>
      </div>


      {/* Fifth Bar */}
      
      <div className="relative" style={{  width: '160px', height: '200px', overflow: 'visible' ,marginTop:'20px' }}>
      <svg viewBox="10 -80 200 360" width="300" height="360">
          {/* Plate style rendering */}
          {renderPlateStyle()}

          {/* Outer yellow circle */}
          <circle cx="80" cy="80" r="80" fill="#FFCA28" />

          {/* Inner plate circle with conditional styling */}
          <circle 
            cx="80" 
            cy="80" 
            r="50" 
            fill={plateStyle === "gradient" ? "url(#plateGradient)" : plateStyle === "shaded" ? plateColor : plateColor}
            filter={plateStyle === "shaded" ? "url(#plateShading)" : undefined}
          />

          {/* Semicircle Outer Line with gap */}
          <path
            d={semicirclePath}
            fill="none"
            stroke="#0286C2"
            strokeWidth="3"
            marker-end="url(#arrowhead)"
          />

          {/* Circular progress bar */}
          <path
            d={`M 80,30
                A 50 50 0 ${percentage_def1 > 50 ? 1 : 0} 1 
                ${80 + 50 * Math.sin(2 * Math.PI * (percentage4 / 100))} 
                ${80 - 50 * Math.cos(2 * Math.PI * (percentage4 / 100))}`}
            fill="none"
            stroke="#b5aeae"
            strokeWidth={arcWidth}
          />

        

          {/* Title text below the circle */}
          <text
            x="80"
            y="85"
            textAnchor="middle"
            fill="#0286C2"
            fontSize="30"
            fontWeight="bold"
          >
            24%
          </text>

          {/* Connecting Line and Text Above the Circle */}
          <g>
            {/* Connecting Line */}
            <line 
              x1="80" 
              y1="-10" 
              x2="80" 
              y2="-40" 
              stroke="#0286C2" 
              strokeWidth="3" 
            />

            {/* Text Above the Circle */}
            <text 
              x="80" 
              y="-55" 
              fill="#0f0606" 
              fontSize="14" 
              fontWeight="bold"
            >
             <tspan x="20" dy="0">LongTerm Care </tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircularBar;
