 $(function(){
 
	$.ajax({

		// link to xml file
		url: 'a1.xml',
		data: {},
		type: 'GET',
		dataType: 'xml',
		success: function(data) {
			
			// find xml elements and assgin to variable
			var studentName = $(data).find('studentName').text();
			var studentProg = $(data).find('studentProg').text();
			var studentCampus = $(data).find('studentCampus').text();
			var image = $(data).find('student > image').text();

			// render to html
			$('h2').text(studentName);
			$(`<h3>- Program: ${ studentProg }</h3>`).insertAfter('h2');
			$('div:first').append(`<h3>- Campus: ${ studentCampus }</h3>`);
			$('div:first').append(`<img src = "${ image }" alt = "joonPicture">`);
			
			// make another <div> areat to display the links
			var cityInfo = $('<div></div>').insertBefore('footer');
	
			var cities = [];

			// contain all cities and display the links for the individual city. 
			for (var i = 0;  i < 3 ; i++) {

				cities.push($(data).find(`name:eq(${i})`).text());
				$('div:last').append(`<a href = ${cities[i].toLowerCase()}.html>
					<h3>${cities[i]}</h3></a>`);
			
			}
					
		}
 
	});

});