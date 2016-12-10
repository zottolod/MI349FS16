// Returns Custom Message based on Date

function welcomeMessage(id, newvalue) {
	var s = document.getElementById(id);
	s.innerHTML = newvalue;
}

window.onload=function() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var n = weekday[d.getDay()];

	if(n=='Friday'){
		var mes = "It's okay! The weekend is almost here. You made it to Friday!";
	}
	else if(n=='Saturday'){
		var mes = "Welcome to my site! I hope you have a great weekend!";
	}
	else if(n=='Sunday'){
		var mes = "Get some rest today. You have a long week ahead of you.";
	}
	else if(n=='Monday'){
		var mes = "Start off the week strong.  Good luck!";
	}
	else if(n=='Tuesday'){
		var mes = "Happy Tuesday!  Welcome to my site!";
	}
	else if(n=='Wednesday'){
		var mes = "Half way through with the week!  Finish strong!";
	}
	else if(n=='Thursday'){
		var mes = "Tomorrow is Friday! Then the weekend!";
	}


	welcomeMessage("message", mes);
}

