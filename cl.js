
function displayTime(){  // create a display time function //
	var elt = document.getElementById("clock"); // set the variable equal to getElementById method//
	var now = new Date();  // set variable equal date objects//
	elt.innerHTML = now.toLocaleTimeString(); //set the innerHTML property euqal to the date object method.
	setTimeout (displayTime, 1000); //set the timeout to call the displayTime function after 1000ms//
}

window.onload = displayTime;  //handler function displayTime to be call when window load event fires//
