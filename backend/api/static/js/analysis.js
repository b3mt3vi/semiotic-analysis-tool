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

    // Access the NLP data (tokens, pos_tags, dependencies) passed from Django
    const terms = {
        opposition1_term1: opposition1_term1,
        opposition1_term2: opposition1_term2,
        opposition2_term1: opposition2_term1,
        opposition2_term2: opposition2_term2,
        neutral_term: neutral_term
    };

    // Display terms on the semiotic square
    Object.keys(positions).forEach(term => {
        svg.append("text")
            .attr("x", positions[term][0])
            .attr("y", positions[term][1])
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(terms[term])  // Display terms dynamically
            .style("font-size", "14px")
            .style("fill", "black");
    });

    // Optionally display POS tags with terms
    Object.keys(positions).forEach((term, index) => {
        svg.append("text")
            .attr("x", positions[term][0])
            .attr("y", positions[term][1] + 20)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(data.nlp_data.pos_tags[index][1])  // Display the POS tag below the term
            .style("font-size", "10px")
            .style("fill", "gray");
    });

    // Draw dependency lines (optional)
    data.nlp_data.dependencies.forEach(dep => {
        const fromTerm = dep[0];  // The word
        const toTerm = dep[2];  // The head word

        svg.append("line")
            .attr("x1", positions[fromTerm][0])
            .attr("y1", positions[fromTerm][1])
            .attr("x2", positions[toTerm][0])
            .attr("y2", positions[toTerm][1])
            .style("stroke", "blue")
            .style("stroke-width", 2)
            .style("marker-end", "url(#arrow)");  // Add arrow markers for dependencies
    });
});
