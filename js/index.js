	var diameter = '71vw';

	// var vertical = ["7vw","14vw","21vw","28vw","35vw","42vw","49vw","56vw","63vw"];

	

	var horizontal = ["hLine0","hLine1","hLine2"];

	var vertical = ["line0","line1","line2","line3","line4","line5","line6"];



	function importData(){

		d3.json("js/alldata.json", function(error, alldata){
			if (error) throw error;
			console.log("json conected");
			console.log(alldata);	
			

		var svg = d3.select('#chart').append('svg'),
		width = +svg.attr('width', '84vw'),
		height = +svg.attr('height', diameter);



	// Chart vertical and horizontal lines
		svg.selectAll("line")
			.data(horizontal)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("width",'70vw')
				.attr ("height", 0.25)
				// .attr("fill", "gray")
				.attr("y", function(d, i){return 8.75 + i * 8.75 + "vw"});
		
		
		svg.selectAll("line")
			.data(vertical)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("height",35+"vw")
				.attr ("width", 0.25)
				.attr("fill", "gray")
				.attr("x", function(d, i){return 8.75 + i * 8.75 + "vw"});

		
			

		// svg.selectAll("line")
		// 	.data(horizontal)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", 0)
		// 		.attr("x2", 70+"vw")
		// 		.attr("y1", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("y2", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);		
		

		// svg.selectAll("line")
		// 	.data(vertical)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("x2", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("y1", 0)
		// 		.attr("y2", 35+"vw")
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);	



		

			// svg.selectAll("line")
			// .data(alldata)
			// .enter()
			// .append("line")
			// .attr("x1", function(d,i){
			// 	return d.medincome / 2457.14286 +("vw");})
			// .attr("x2", function(d,i){
			// 	return d.medincome / 2457.14286 +("vw");
			// })
			// .attr("y1",function(d, i){
			// 	return 43.75 - (d.mathrating * 8.75) +("vw");})
			// .attr("y2", function(d, i){
			// 	return 43.75 - (d.mathrating * 8.75) +("vw");
			// })
			// .attr("stroke", "gray")
			// .attr("stroke-width", 0.5);

			

			// .attr("class", "noline")

			// .on('mouseover',function(d){
			// 	d3.select(this).classed("yesline",true)

			// })
			// .on('mouseout',function(d){
			// 	d3.select(this).classed("yesline",false)
				
			// });
		


	//Creating the circles	
		var circleScale = d3.scale.linear()
		.domain(d3.extent(alldata,function(d)
			{return d.students}))
		.range(["0.4vw","3.5vw"])


		var circles = svg.selectAll("circle")
			.data(alldata)
			.enter()
			.append("circle")
			.attr("r", function(d){	
				return circleScale(d.students)
				// return d.students * 0.002 +("vw");
			})

			.attr("cx", function(d){
				// return d.medincome / 1457.14286 +("vw");
				return d.medincome / 2457.14286 +("vw");
			})
			.attr("cy", function(d, i){
				return 43.75 - (d.mathrating * 8.75) +("vw");
			})


	     	.style("fill",function(d){
	        	  return ((d.eth == "Black")?"#00635D":
	        	  	(d.eth == "White")?"#7B0828":
	        	  	(d.eth == "Hispanic")?"#E3D26F":
	        	  	(d.eth == "Asian")?"#36173A":
	        	  	(d.eth == "Other")?"#BB6B00":"gray");

	      	})
			.style('fill-opacity', 0.6)
			.style("stroke", "gray")
			.style("stroke-width", 0.5);







		// svg.selectAll("line")
		// 	.data(alldata)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", function(d, i){return d.medincome / 2457.14286 +("vw");})
		// 		.attr("x2", function(d, i){return d.medincome / 2457.14286 +("vw");})
		// 		.attr("y1", function(d, i){return 43.75 - (d.mathrating * 8.75) +("vw");})
		// 		.attr("y2", function(d, i){return 43.75 - (d.mathrating * 8.75) +("vw");})
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);



	
		svg.selectAll("text")
			.data(alldata)
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

				//THis is the on mouse over alldata
			.on('mouseover',function(d){
				d3.select(this).classed("selected",true)

			})
			.on('mouseout',function(d){
				d3.select(this).classed("selected",false)
				
			});




	})
}


	
	importData();


