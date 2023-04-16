(() => {

var width = 150,
    height = 150;
var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-40)
    .friction(0.8)
    .linkDistance(30)
    .size([width, height]);

var svg = d3.select("#soil-plot").append("svg")
    .attr("width", width)
    .attr("height", height);

var graph = getData();
console.log("GRAPH", graph)
var nodes = graph.nodes;
var nodeMap = {};

graph.nodes.forEach(function(d) { nodeMap[d.name] = d; });
console.log("nodeMap", nodeMap)
graph.links.forEach(function(l) {
    l.source = nodeMap[l.source];
    l.target = nodeMap[l.target];
})

force.nodes(graph.nodes)
    .links(graph.links)
    .start();

var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function(d) {
        return Math.sqrt(d.value)+1;
    });

var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", function (d) {return d.radius})
    .style("fill", function(d) { return d.group; })
    .call(force.drag);


node.append("title")
    .text(function(d) { return d.name; });

force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
});


function getData() {

  return {
  "nodes":[
    // {"name":"stkbl0001","group":"#8ae6fb", "radius":5},
    // {"name":"stkbl0001","group":"#8ae6fb", "radius":5},
    // {"name":"stkbl0001","group":"#8ae6fb", "radius":5},
    // {"name":"stkbl0001","group":"#8ae6fb", "radius":5},
    {"name":"Soil","group":"#FFDE69", "radius":50},
    // {"name":"stkbl0001","group":"#FF6BFA", "radius":5},
    // {"name":"stkbl0001","group":"#FF6BFA", "radius":8},
    // {"name":"stkbl0001","group":"#FF6BFA", "radius":7},
    // {"name":"stkbl0001","group":"#FF6BFA", "radius":10},
    // // {"name":"stkbl0001","group":"#FF6BFA", "radius":9},
    // {"name":"stkbl0001","group":"#FF6BFA", "radius":15},
    // // {"name":"stkbl0001","group":"#FF6BFA", "radius":20},

   
  ],
  "links":[
    // {"source":"stkbl0001","target":"stkbl0005","value":3},
    // {"source":"stkbl0002","target":"stkbl0005","value":3},
    // {"source":"stkbl0003","target":"stkbl0005","value":3},
    // {"source":"stkbl0004","target":"stkbl0005","value":3}
  ] };    
    
}

})()
