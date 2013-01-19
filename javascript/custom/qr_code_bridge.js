
function insertQRCode(url, divToWriteTo){
	divToWriteTo.append('<div id="qrdiv"><form name="qrinp">'+
		'<input type="hidden" name="ECC" value="1" size="1">'+
		'</input><input type="hidden" name="qrinput" value="'+ url 
		+'"> </input></form>'+
		'<canvas id="qrcanv"}>No Canvas Support?');

	setupqr();
	doqr();

}