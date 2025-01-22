let pageDescription = "A tiny playground for a computer science student exploring any ideas."

var pageDescription_ =  document.getElementById("pageDescription")
pageDescription_.innerHTML = pageDescription

const width = window.innerWidth * 0.9 - 60
const height = window.innerHeight * 0.5
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

d3.csv("https://raw.githubusercontent.com/vibing-onion/home/master/field.csv").then( function(data) {

  const color = d3.scaleOrdinal()
    .domain(["Data Science", "Computer Science", "Business", "Math"])
    .range(d3.schemeSet1);

  const size = d3.scaleLinear()
    .domain([1, 21])
    .range([35,120])

  let node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("class", "node")
      .attr("r", d => size(d.Size))
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .style("fill", d => color(d.Tag))
      .style("fill-opacity", 0.8)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      .call(d3.drag() 
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended));
  
   let labels = svg.append("g")
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("class", "label")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .text(d => d.Tag)
    .attr("x", width / 2)
    .attr("y", height / 2);

  const simulation = d3.forceSimulation()
      .force("center", d3.forceCenter().x(width / 2).y(height / 2)) 
      .force("charge", d3.forceManyBody().strength(.1)) 
      .force("collide", d3.forceCollide().strength(.2).radius(function(d){ return (size(d.Size)+3) }).iterations(1)) 

  simulation
      .nodes(data)
      .on("tick", function(d){
        node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
        labels
          .attr("x", d => d.x)
          .attr("y", d => d.y);
      });
  
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(.03).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(.03);
    d.fx = null;
    d.fy = null;
  }
})
