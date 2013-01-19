

function getCard(user, cardID){

	if(user == 'a'){
		return '/html/resources/users/a/' + cardID + '.html'
	}else if(user == 'b'){
		return '/html/resources/users/b/' + cardID + '.html'
	}else{
		alert("ERROR");
	}
}