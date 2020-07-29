//https://d3js.org/d3.v5.js --> to copy the entire library

const canvas = d3.select(".canva");

// var dataArray = [4, 15, 34, 23];

/*
    JSON -> JavaScript Object Notation
*/


// add an svg element
const svg = canvas.append("svg")
            .attr("width", 600 )
            .attr("height",600 );

svg.attr("height", 600);
svg.attr("width", 600);

const rect = svg.selectAll("rect")

d3.json("test.json")
    .then(data => { console.log(data);
    
rect.data(data)
    .enter().append("rect")
    .attr("rx", 5)
    .attr("width",24)
    .attr("height", (d) => { return d.height * 2;})
    .attr("fill",(d, i) => { return d.fill; } )
    .attr("x", (d, i) => { return i * 25; })
    .attr("y", (d, i) => { return 100 - (d.height * 2); })

    });
