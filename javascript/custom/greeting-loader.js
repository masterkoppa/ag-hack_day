/**
Gets the resource url from the database based on this page's url
*/
function getResourceURL(){}
	var hash = window.location.hash.substring(1);

	var resourceURL = "";

	console.log(hash);

	$.post('../../php/getResourceURL.php', {'hash': hash}, function(data){
		resourceURL = data;
	});
}