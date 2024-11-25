import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

const SankeyDiagramG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1100;
    const height = 500;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    svg.attr("width", width).attr("height", height);

    const colorScale = d3.scaleOrdinal()
      .domain(["Patients", "Male", "Female", "Old Male", "Adult Male", "Old Female", "Adult Female", "Neurologist", "Ophthalmologist", "PCP"])
      .range([
        "#42A5F5", // Bright Blue for Patients
        "#2196F3", // Slightly Darker Blue for Male
        "#F06292", // Bright Pink for Female
        "#66BB6A", // Bright Green for Old Male
        "#4DB6AC", // Bright Teal for Adult Male
        "#FFD54F", // Bright Yellow for Old Female
        "#BA68C8", // Bright Purple for Adult Female
        "#8D6E63", // Earthy Brown for Neurologist
        "#9C27B0", // Bright Purple for Ophthalmologist
        "#FFC107"  // Bright Amber for PCP
      ]);

    const data = {
      nodes: [
        { name: "Patients", value: 100 },
        { name: "Male", value: 24 },
        { name: "Female", value: 76 },
        { name: "Old Male", value: 4 },
        { name: "Adult Male", value: 20 },
        { name: "Old Female", value: 4 },
        { name: "Adult Female", value: 72 },
        { name: "Neurologist", value: 50 },
        { name: "Ophthalmologist", value: 50 },
        { name: "PCP", value: 8 }
      ],
      links: [
        { source: 0, target: 1, value: 24 },
        { source: 0, target: 2, value: 76 },
        { source: 1, target: 3, value: 4 },
        { source: 1, target: 4, value: 20 },
        { source: 2, target: 5, value: 4 },
        { source: 2, target: 6, value: 72 },
        { source: 3, target: 7, value: 4 },
        { source: 4, target: 7, value: 10 },
        { source: 4, target: 8, value: 10 },
        { source: 5, target: 7, value: 2 },
        { source: 5, target: 8, value: 2 },
        { source: 6, target: 9, value: 8 },
        { source: 6, target: 7, value: 32 },
        { source: 6, target: 8, value: 32 }
      ]
    };

    const sankeyGenerator = sankey()
      .nodeWidth(40)
      .nodePadding(20)
      .extent([
        [margin.left, margin.top],
        [width - margin.right, height - margin.bottom]
      ]);

    const { nodes, links } = sankeyGenerator(data);

    const chart = svg.append("g");

    // Links with hover effect
    const linkEnter = chart.append("g")
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", d => colorScale(d.source.name))
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", d => Math.max(1, d.width))
      .on("mouseover", function() {
        d3.select(this)
          .attr("stroke-opacity", 0.8)
          .attr("stroke-width", d => Math.max(2, d.width * 1.5));
      })
      .on("mouseout", function() {
        d3.select(this)
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", d => Math.max(1, d.width));
      });

    // Nodes with hover effect
    const node = chart.append("g")
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    node.append("rect")
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => colorScale(d.name))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .on("mouseover", function() {
        d3.select(this)
          .attr("stroke", "#000")
          .attr("stroke-width", 3);
      })
      .on("mouseout", function() {
        d3.select(this)
          .attr("stroke", "#fff")
          .attr("stroke-width", 2);
      });

    node.append("text")
      .attr("x", d => (d.x1 - d.x0) / 2)
      .attr("y", d => (d.y1 - d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => `${d.name}: ${d.value}%`)
      .attr("fill", "#000")
      .style("font-size", "12px")
      .style("font-weight", "bold");

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default SankeyDiagramG;