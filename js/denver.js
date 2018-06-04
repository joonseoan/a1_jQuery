 $(function(){
 
	$.ajax({

		url: 'a1.xml',
		data: {},
		type: 'GET',
		dataType: 'xml',
		success: function(data) {
				
			var city_name = $(data).find('name:eq(2)').text();
			var country = $(data).find('country:eq(2)').text();
			var province = $(data).find('province:eq(2)').text();
			var image = $(data).find('image:eq(3)').text();
			console.log(image);

			$('h2').text(city_name);
			$(`<h3>- Country: ${ country }</h3>`).insertAfter('h2');
			$('div:first').append(`<h3>- Province: ${ province }</h3>`);
			$('div:first').append(`<img src = "${ image }" alt = "denver">`);

			var cityInfo = $('<div></div>').insertBefore('footer');
	
			var cities = [];
			for (var i = 0;  i < 3 ; i++) {

				var cName = $(data).find(`name:eq(${i})`).text();
				if(city_name !== cName) cities.push(cName);

			}

			cities.forEach(function (city) {

				$('div:last').append(`<a href = ${city.toLowerCase()}.html>
					<h3>${city} </h3></a>`);

			});

			$('div:last').append('<a href="index.html"><h3>Home</h3></a>');

			
		}
 
	});

});






