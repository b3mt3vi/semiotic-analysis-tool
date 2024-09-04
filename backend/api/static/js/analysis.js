document.addEventListener("DOMContentLoaded", function() {
    const width = 800;
    const height = 600;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define positions for each term
    const positions = {
        opposition1_term1: [width / 5, height / 5],  // Top-left
        opposition1_term2: [4 * width / 5, height / 5],  // Top-right
        opposition2_term1: [width / 5, 4 * height / 5],  // Bottom-left
        opposition2_term2: [4 * width / 5, 4 * height / 5],  // Bottom-right
        neutral_term: [width / 2, height / 2]  // Center
    };
    

    // Draw the square
    svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .style("fill", "none")
        .style("stroke", "black");
    svg.append("line")
        .attr("x1", positions.opposition1_term1[0])
        .attr("y1", positions.opposition1_term1[1])
        .attr("x2", positions.opposition2_term2[0])
        .attr("y2", positions.opposition2_term2[1])
        .style("stroke", "black")
        .style("stroke-width", 2);
    
    svg.append("line")
        .attr("x1", positions.opposition1_term2[0])
        .attr("y1", positions.opposition1_term2[1])
        .attr("x2", positions.opposition2_term1[0])
        .attr("y2", positions.opposition2_term1[1])
        .style("stroke", "black")
        .style("stroke-width", 2);
    

    Object.keys(positions).forEach(term => {
        svg.append("text")
            .attr("x", positions[term][0])
            .attr("y", positions[term][1])
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(data.terms[term])
            .style("font-size", "14px")
            .style("fill", "black");
    });
});
