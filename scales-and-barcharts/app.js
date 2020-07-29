
// select div: class = canvas
const canvas = d3.select(".canvas");

// add an svg element to div-canvas
const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);


const rect = svg.selectAll("rect");

d3.json("../boot-tester/test.json")
    .then(data => {
        console.log(data)
        rect.data(data)
                .enter().append("rect")
                .attr("width", (d,i) => d.width)
                .attr("height", (d,i) => d.height)
                .attr("fill", (d) => d.fill)
                .attr("x", (d,i) => i * 26)
                .attr("y", (d,i) => 180 - d.height)
    })