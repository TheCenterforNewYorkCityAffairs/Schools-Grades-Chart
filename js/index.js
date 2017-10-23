	var diameter = '71vw';

	// var vertical = ["7vw","14vw","21vw","28vw","35vw","42vw","49vw","56vw","63vw"];

	var vertical = ["line0","line1","line2","line3","line4","line5","line6","line7","line8"];

	var horizontal = ["hLine0","hLine1","hLine2","hLine3","hLine4"];



	function importData(){

		d3.json("js/data.json", function(data){
			console.log(data);

		var svg = d3.select('#chart').append('svg')
		.attr('width', diameter)
		.attr('height', diameter);

	// Chart vertical and horizontal lines
		svg.selectAll("line")
			.data(horizontal)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("width",'70vw')
				.attr ("height", 0.5)
				// .attr("fill", "gray")
				.attr("y", function(d, i){return i * 8.75 + "vw"});
		
		
		svg.selectAll("line")
			.data(vertical)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("height",35+"vw")
				.attr ("width", 0.5)
				.attr("fill", "gray")
				.attr("x", function(d, i){return i * 8.75 + "vw"});


		// var line = svg.append("line")
		// 	.attr("x1", 250)
		// 	.attr("x2", 700)
		// 	.attr("y1", 250)
		// 	.attr("y2", 350)
		// 	.attr("stroke", "gray")
		// 	.attr("stroke-width", 2);	
	//end of the backlines	


	//Creating the circles	

		svg.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr("r", function(d){
				return d.students / 20 +("vw") ;
			})
			.attr("cx", function(d){
				// return d.medincome / 1457.14286 +("vw");
				return d.medincome / 2457.14286 +("vw");
			})
			.attr("cy", function(d, i){
				return 43.75 - (d.mathrating * 8.75) +("vw");
			})


	     	.style("fill",function(d){
	        	  return ((d.eth == "Black")?"#68a19e":
	        	  	(d.eth == "White")?"#af6c7e":
	        	  	(d.eth == "Hispanic")?"#eee3ac":
	        	  	(d.eth == "Asian")?"#867588":
	        	  	"#d5a56b");

	      	})

			// .style("fill", function(d) { return d.color})
			.style('fill-opacity', 0.8)
			;

	

	
		svg.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.attr("fill", "gray")
			.attr("class", "text-fill")
			.attr("text-anchor", "middle")
			.attr("y", function(d,i){
				return 43.75 - (d.mathrating * 8.75) +("vw"); 
			})
			.attr("x", function(d,i){
				return d.medincome / 2457.14286 +("vw");
				// return d.medincome / 2457.14286 +("vw");
			})
			.text(function(d){
				return "students:" + d.students;
			})

				//THis is the on mouse over info
			.on('mouseover',function(d){
				d3.select(this).classed("selected",true)

			})
			.on('mouseout',function(d){
				d3.select(this).classed("selected",false)
				
			})
			;



	})
}


	
	importData();

