 $(function(){
 
	$.ajax({

		url: 'a1.xml',
		data: {},
		type: 'GET',
		dataType: 'xml',
		success: function(data) {
			
			// pull out data from xml file				
			var city_name = $(data).find('name:eq(0)').text();
			var country = $(data).find('country:eq(0)').text();
			var province = $(data).find('province:eq(0)').text();
			var image = $(data).find('image:eq(1)').text();

			// render the data to html file by using jquery
			$('h2').text(city_name);
			$(`<h3>- Country: ${ country }</h3>`).insertAfter('h2');
			$('div:first').append(`<h3>- Province: ${ province }</h3>`);
			$('div:first').append(`<img src = "${ image }" alt = "toronto">`);			
			
			// make another <div> area for the buttons
			var cityInfo = $('<div></div>').insertBefore('footer');
	
			var cities = [];
			for (var i = 0;  i < 3 ; i++) {

				var cName = $(data).find(`name:eq(${i})`).text();
				
				// just push the cities which is not displayed here
				if(city_name !== cName) cities.push(cName);

			}

			// display buttons
			cities.forEach(function (city) {

				$('div:last').append(`<a href = ${city.toLowerCase()}.html>
					<h3>${city} </h3></a>`);

			});

			$('div:last').append('<a href="index.html"><h3>Home</h3></a>');

		}
 
	});

});






