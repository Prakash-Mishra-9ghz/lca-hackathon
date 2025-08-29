import React from 'react';

function Results({ result }) {
  return (
    <div className="results">
      <h2>LCA Results</h2>
      <ul>
        <li><strong>Carbon Footprint:</strong> {result.carbon} kg CO₂e</li>
        <li><strong>Recycled Content:</strong> {result.recycled_pct}%</li>
        <li><strong>Resource Efficiency:</strong> {result.efficiency}</li>
      </ul>
    </div>
  );
}

export default Results;
