import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

const NMOSDTreatmentSankey = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const containerWidth = containerRef.current.clientWidth;
    const width = Math.max(containerWidth, 700);
    const height = 600; // Slightly increased height for better spacing

    const data = {
      nodes: [
        { name: 'Diagnosed\nPatients' },
        { name: 'Immunosuppressive\n& Anti-Inflammatory\nTherapies' },
        { name: 'First Line\nTherapy' },
        { name: 'Second Line\nTherapy' },
        { name: 'Comprehensive\nSupportive\nCare' },
      ],
      links: [
        { source: 0, target: 1, value: 68 },
        { source: 0, target: 2, value: 32 }, 
        { source: 1, target: 2, value: 56 },  
        { source: 2, target: 3, value: 56 },  
        { source: 3, target: 4, value: 32 },
      ]
    };

    // Enhanced color palette with more contrast and medical theme
    const colorPalette = [
      '#E6F3FF',  // Light Blue for Initial Stage
      '#27ae60',  // Soft Muted Blue for Assessment
      '#7AB2E0',  // Medium Blue for Primary Therapies
      '#4090D0',  // Deeper Blue for First Line Treatment
      '#2A7CAB',  // Strong Blue for Second Line Treatment
      '#16a085',  // Dark Blue for Supportive Care
      '#d35400'   // Navy Blue for Advanced Options
    ];

    const colorScale = d3.scaleOrdinal(colorPalette);

    const sankeyGenerator = sankey()
      .nodeWidth(40)
      .nodePadding(60) 
      .size([width - 150, height - 150]);

    const { nodes, links } = sankeyGenerator({
      nodes: data.nodes.map(d => ({ ...d })),
      links: data.links.map(d => ({ ...d }))
    });

    const chart = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(75,75)');

    // Gradient definitions for links with smoother transition
    const defs = svg.append('defs');
    links.forEach((link, i) => {
      const gradient = defs.append('linearGradient')
        .attr('id', `gradient-${i}`)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', link.source.x1)
        .attr('y1', (link.source.y0 + link.source.y1) / 2)
        .attr('x2', link.target.x0)
        .attr('y2', (link.target.y0 + link.target.y1) / 2);

      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', colorScale(link.source.name))
        .attr('stop-opacity', 0.7);

      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', colorScale(link.target.name))
        .attr('stop-opacity', 0.9);
    });

    // Draw links with subtle hover effect
    chart.append('g')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('d', sankeyLinkHorizontal())
      .attr('fill', 'none')
      .attr('stroke', (d, i) => `url(#gradient-${i})`)
      .attr('stroke-width', d => Math.max(1, d.width))
      .attr('stroke-opacity', 0.5)
      .attr('class', 'transition-all duration-200')
      .on('mouseenter', function () {
        d3.select(this)
          .attr('stroke-opacity', 0.8)
          .attr('stroke-width', d => Math.max(2, d.width * 1.2));
      })
      .on('mouseleave', function () {
        d3.select(this)
          .attr('stroke-opacity', 0.5)
          .attr('stroke-width', d => Math.max(1, d.width));
      });

    // Draw nodes with subtle hover and shadow
    const node = chart.append('g')
      .selectAll('rect')
      .data(nodes)
      .enter()
      .append('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('height', d => d.y1 - d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('fill', d => colorScale(d.name))
      .attr('stroke', '#4A90E2')
      .attr('stroke-width', 1.5)
      .attr('rx', 10)
      .attr('ry', 10)
      .style('cursor', 'pointer')
      .style('filter', 'drop-shadow(2px 2px 3px rgba(0,0,0,0.1))')
      .attr('class', 'transition-all duration-300')
      .on('mouseenter', function () {
        d3.select(this)
          .attr('opacity', 0.85)
          .attr('stroke-width', 2);
      })
      .on('mouseleave', function () {
        d3.select(this)
          .attr('opacity', 1)
          .attr('stroke-width', 1.5);
      });

    // Enhanced labels with more readable positioning
    chart.append('g')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('x', d => d.x0 < width / 2 
        ? d.x1 + 15  
        : d.x0 - 15  
      )
      .attr('y', d => (d.y1 + d.y0) / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', d => d.x0 < width / 2 ? 'start' : 'end')
      .text(d => `${d.name} (${d.value || ''}%)`)
      .attr('font-size', '13px')
      .attr('fill', '#1A4B7C')
      .style('font-weight', 'bold')
      .style('text-shadow', '1px 1px 2px rgba(0,0,0,0.1)');

  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-lg shadow-md p-4 w-full overflow-x-auto">
      <svg ref={svgRef} className="w-full"></svg>
    </div>
  );
};

export default NMOSDTreatmentSankey;