
// var margin = {top: 20, right: 20, bottom: 30, left: 50},
// width = 600 - margin.left - margin.right,
// height = 250 - margin.top - margin.bottom;

// var parseFloar = d3.time.format("%y-%b-%d");

// var x = d3.scale.linear()
// time.scale
//   .range([0, width]);

// var y = d3.scale.linear()
//   .range([height, 0]);

// var xAxis = d3.svg.axis()
//   .scale(x)
//   .orient("bottom")
//   .tickFormat(d3.format("d"))
//   .tickSize(2);


// var yAxis = d3.svg.axis()
//   .scale(y)
//   .orient("left")
//   .ticks(5)
//   .tickSize(2);

// var line = d3.svg.line()
//   .x(function(d) { return x(d.year); })
//   .y(function(d) { return y(d["B/Bmsytouse"]); });

// TODO: Cannot select with d3 until after page load 
//  using $( function() { ... do d3 stuff here ... })

// var svg = d3.select("body").append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  //       .style("font-size","12px");


  //   d3.csv("yft_short.csv", type, function(error, data) {
  //     if (error) throw error;
  //     console.log("data", data)
  //     x.domain(d3.extent(data, function(d) { return d.year; }));
  //     y.domain(d3.extent(data, function(d) { return d.ffmsy; }));

  //     svg.append("g")
  //       .attr("class", "x axis")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(xAxis);

  //     svg.append("g")
  //       .attr("class", "y axis")
  //       .call(yAxis)

  //     .append("text")
  //       .attr("transform", "rotate(-90)")
  //       .attr("y", 4)
  //       .attr("dy", ".61em")
  //       .style("text-anchor", "end")
  //       .text("F/Fmsy");

  //     svg.append("path")
  //       .datum(data)
  //       .attr("class", "line")
  //       .attr("d", line);
  //   });

  //   function type(d) {
  //     d.year = d.year;
  //     d.ffmsy = +d.ffmsy;
  //     return d;
  //   }


  function doGraph(data){
    console.log("doing graph...", data)
  }


// fish input jquery

  $(function() {
    $( "#tags" ).autocomplete({
      source: availableFish,
       focus: function( event, ui ) {
        $( "#tags" ).val( ui.item.label );
        return false;
      },
      select: function(event, ui){
        $.ajax({
          type: "POST",
          url: '/api/searchbyfish',
          contentType: 'application/json;charset=UTF-8',
          data: JSON.stringify(ui, null, '\t'),
          success: doGraph
        });
      }
    });
  });