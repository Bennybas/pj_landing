import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HorizontalTreeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Percentage data
    const percentageData = {
      "Crystalloid -> Crystalloid": 5.88,
      "Cyclophosphamide -> Cyclophosphamide": 11.76,
      "Cyclophosphamide -> Prednisolone": 5.88,
      "Cyclophosphamide -> Rituximab": 5.88,
      "Kortison -> Kortison": 11.76,
      "Kortison -> Tocilizumab": 5.88,
      "Methylprednisolon -> Methylprednisolon": 17.65,
      "Prednisolone -> Prednisolone": 11.76,
      "Prednisolone -> Rituximab": 5.88,
      "Rituximab -> Prednisolone": 5.88,
      "Rituximab -> Rituximab": 64.71,
      "Tocilizumab -> Tocilizumab": 5.88
    };

    // Custom color palette for distinct treatments
    const colorPalette = {
      "Crystalloid": "#1F77B4",     // Blue
      "Cyclophosphamide": "#FF7F0E", // Orange
      "Kortison": "#2CA02C",         // Green
      "Methylprednisolon": "#D62728",// Red
      "Prednisolone": "#9467BD",     // Purple
      "Rituximab": "#8C564B",        // Brown
      "Tocilizumab": "#E377C2"       // Pink
    };

    // Data structure
    const data = {
      name: "Female",
      children: [
        {
          name: "Crystalloid",
          children: [
            { 
              name: "Crystalloid", 
              percentage: percentageData["Crystalloid -> Crystalloid"],
              color: colorPalette["Crystalloid"]
            }
          ]
        },
        {
          name: "Cyclophosphamide",
          children: [
            { 
              name: "Cyclophosphamide", 
              percentage: percentageData["Cyclophosphamide -> Cyclophosphamide"],
              color: colorPalette["Cyclophosphamide"]
            },
            { 
              name: "Prednisolone", 
              percentage: percentageData["Cyclophosphamide -> Prednisolone"],
              color: colorPalette["Prednisolone"]
            },
            { 
              name: "Rituximab", 
              percentage: percentageData["Cyclophosphamide -> Rituximab"],
              color: colorPalette["Rituximab"]
            }
          ]
        },
        {
          name: "Kortison",
          children: [
            { 
              name: "Kortison", 
              percentage: percentageData["Kortison -> Kortison"],
              color: colorPalette["Kortison"]
            },
            { 
              name: "Tocilizumab", 
              percentage: percentageData["Kortison -> Tocilizumab"],
              color: colorPalette["Tocilizumab"]
            }
          ]
        },
        {
          name: "Methylprednisolon",
          children: [
            { 
              name: "Methylprednisolon", 
              percentage: percentageData["Methylprednisolon -> Methylprednisolon"],
              color: colorPalette["Methylprednisolon"]
            }
          ]
        },
        {
          name: "Prednisolone",
          children: [
            { 
              name: "Prednisolone", 
              percentage: percentageData["Prednisolone -> Prednisolone"],
              color: colorPalette["Prednisolone"]
            },
            { 
              name: "Rituximab", 
              percentage: percentageData["Prednisolone -> Rituximab"],
              color: colorPalette["Rituximab"]
            }
          ]
        },
        {
          name: "Rituximab",
          children: [
            { 
              name: "Prednisolone", 
              percentage: percentageData["Rituximab -> Prednisolone"],
              color: colorPalette["Prednisolone"]
            },
            { 
              name: "Rituximab", 
              percentage: percentageData["Rituximab -> Rituximab"],
              color: colorPalette["Rituximab"]
            }
          ]
        },
        {
          name: "Tocilizumab",
          children: [
            { 
              name: "Tocilizumab", 
              percentage: percentageData["Tocilizumab -> Tocilizumab"],
              color: colorPalette["Tocilizumab"]
            }
          ]
        }
      ]
    };

    const width = 600;
    const height = 800;

    // Create a custom hierarchy sorting function
    const root = d3.hierarchy(data, d => {
      if (d.children) {
        // Sort children based on percentage in descending order
        d.children.sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
      }
      return d.children;
    });

    const dx = 40;
    const dy = 200;

    const tree = d3.tree().nodeSize([dx, dy]);
    tree(root);

    const x0 = Math.min(...root.descendants().map(d => d.x));
    const x1 = Math.max(...root.descendants().map(d => d.x));

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", x1 - x0 + dx * 2)
      .attr("viewBox", [0, x0 - dx, width, x1 - x0 + dx * 2])
      .style("font", "12px Arial, sans-serif");

    // Gradient background
    svg.append("defs")
      .append("linearGradient")
      .attr("id", "background-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        {offset: "0%", color: "rgba(240, 248, 255, 0.5)"},
        {offset: "100%", color: "rgba(230, 240, 255, 0.2)"}
      ])
      .enter().append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);

    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "url(#background-gradient)");

    const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#888")
      .attr("stroke-opacity", 0.3)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))
      .attr("stroke-dasharray", "3,3");

    const radiusScale = d3.scaleLinear()
      .domain([0, 64.71]) // Max percentage
      .range([4, 25]); // Increased max radius for more visibility

    const node = svg.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 2)
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("fill", d => {
        // Use color from data if available, otherwise use a default color
        return (d.data.color || "#777")
      })
      .attr("r", d => radiusScale(d.data.percentage || 0))
      .attr("stroke", d => {
        const baseColor = d3.color(d.data.color || "#777");
        return baseColor.darker(0.7);
      })
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.7);

    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => (d.children ? -15 : 15))
      .attr("text-anchor", d => (d.children ? "end" : "start"))
      .text(d => {
        const percentage = d.data.percentage ? 
          `${d.data.name} (${d.data.percentage.toFixed(2)}%)` : 
          d.data.name;
        return percentage;
      })
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("fill", "#333")
      .clone(true).lower()
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    return () => {
      d3.select(chartRef.current).select("svg").remove();
    };
  }, []);

  return <div ref={chartRef} style={{ 
    width: "100%", 
    height: "100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" 
  }}></div>;
};

export default HorizontalTreeChart;