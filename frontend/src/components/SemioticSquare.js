import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function SemioticSquare({ data }) {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 500)
      .attr('height', 500);
    
    svg.selectAll('*').remove();  // Clear previous squares
    
    // Add semiotic square rectangles and text
    svg.append('rect')
      .attr('x', 100)
      .attr('y', 100)
      .attr('width', 300)
      .attr('height', 300)
      .style('fill', 'none')
      .style('stroke', 'black');
    
    svg.append('text').attr('x', 120).attr('y', 120).text(data.opposition1_term1);
    svg.append('text').attr('x', 360).attr('y', 120).text(data.opposition1_term2);
    svg.append('text').attr('x', 120).attr('y', 360).text(data.opposition2_term1);
    svg.append('text').attr('x', 360).attr('y', 360).text(data.opposition2_term2);
    svg.append('text').attr('x', 240).attr('y', 240).text(data.neutral_term);
    
  }, [data]);

  return <svg ref={ref}></svg>;
}

export default SemioticSquare;
