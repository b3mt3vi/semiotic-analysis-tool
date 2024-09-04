import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function SemioticSquare({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 500)
      .attr('height', 500);
    
    svg.selectAll('*').remove();

    svg.append('rect')
      .attr('x', 100)
      .attr('y', 100)
      .attr('width', 300)
      .attr('height', 300)
      .style('fill', 'none')
      .style('stroke', 'black');

    const terms = [
      { text: data.opposition1_term1, x: 120, y: 120 },
      { text: data.opposition1_term2, x: 360, y: 120 },
      { text: data.opposition2_term1, x: 120, y: 360 },
      { text: data.opposition2_term2, x: 360, y: 360 },
      { text: data.neutral_term, x: 240, y: 240 }
    ];

    svg.selectAll('text')
      .data(terms)
      .enter()
      .append('text')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .text(d => d.text)
      .style('font-size', '14px')
      .style('fill', 'black');
    
  }, [data]);

  return <svg ref={ref}></svg>;
}

export default SemioticSquare;
