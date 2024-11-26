import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HorizontalTreeChartMale = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Percentage data for Male
    const percentageData = {
      "Azathioprine -> Azathioprine": 16.67,
      "Azathioprine -> Kortison": 16.67,
      "Crystalloid -> Crystalloid": 16.67,
      "Injektion -> Injektion": 16.67,
      "Kortison -> Kortison": 16.67,
      "Kortison -> Soliris / eculizumab": 16.67,
      "Prednisolone -> Prednisolone": 16.67,
      "Soliris / eculizumab -> Soliris / eculizumab": 33.33,
      "Steroide -> Steroide": 16.67
    };

    const colorPalette = {
      "Azathioprine": "#1F77B4", // Bright Blue
      "Kortison": "#FF7F0E", // Vibrant Orange
      "Crystalloid": "#2CA02C", // Vivid Green
      "Injektion": "#D62728", // Bright Red
      "Prednisolone": "#9467BD", // Deep Purple
      "Soliris / eculizumab": "#8C564B", // Rich Brown
      "Steroide": "#E377C2" // Bright Pink
    };

    const data = {
      name: "Male",
      children: [
        {
          name: "Azathioprine",
          children: [
            {
              name: "Azathioprine",
              percentage: percentageData["Azathioprine -> Azathioprine"],
              color: colorPalette["Azathioprine"]
            },
            {
              name: "Kortison",
              percentage: percentageData["Azathioprine -> Kortison"],
              color: colorPalette["Kortison"]
            }
          ]
        },
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
          name: "Injektion",
          children: [
            {
              name: "Injektion",
              percentage: percentageData["Injektion -> Injektion"],
              color: colorPalette["Injektion"]
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
              name: "Soliris / eculizumab",
              percentage: percentageData["Kortison -> Soliris / eculizumab"],
              color: colorPalette["Soliris / eculizumab"]
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
            }
          ]
        },
        {
          name: "Soliris / eculizumab",
          children: [
            {
              name: "Soliris / eculizumab",
              percentage: percentageData["Soliris / eculizumab -> Soliris / eculizumab"],
              color: colorPalette["Soliris / eculizumab"]
            }
          ]
        },
        {
          name: "Steroide",
          children: [
            {
              name: "Steroide",
              percentage: percentageData["Steroide -> Steroide"],
              color: colorPalette["Steroide"]
            }
          ]
        }
      ]
    };

    const width = 500;
    const height = 800;

    const root = d3.hierarchy(data, d => {
      if (d.children) {
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
      .style("font", "12px Arial, sans-serif")
      .style("background", "#ffffff"); // Pure white background

    const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#c0c0c0")
      .attr("stroke-opacity", 0.5)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", d3.linkHorizontal()
        .x(d => width - d.y)
        .y(d => d.x));

    const radiusScale = d3.scaleLinear()
      .domain([0, 33.33])
      .range([4, 25]);

    const node = svg.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${width - d.y},${d.x})`);

    node.append("circle")
      .attr("fill", d => d.data.color || "#777")
      .attr("r", d => radiusScale(d.data.percentage || 0))
      .attr("stroke", d => d.data.color || "#777")
      .attr("stroke-width", 2)
      .attr("fill-opacity", 1); // Full opacity

    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => (d.children ? -15 : 15))
      .attr("text-anchor", d => (d.children ? "end" : "start"))
      .text(d => {
        const percentage = d.data.percentage
          ? `(${d.data.percentage.toFixed(2)}%)${d.data.name}`
          : d.data.name;
        return percentage;
      })
      .style("font-size", "10px")
      .clone(true).lower()
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    return () => {
      d3.select(chartRef.current).select("svg").remove();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default HorizontalTreeChartMale;