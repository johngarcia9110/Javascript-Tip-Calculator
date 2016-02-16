//script.js

//custom function
function calculateTip() {

	//Store data of inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	//quick validation
	if(billAmount === "" || serviceQuality === 0) {
		return window.alert("Please enter some values to get this baby up and running!");
		// can add return here or in front of window.alert. Still stops the function regardless
	}
	//check to see if input is empty or less than or equal to 1
	if(numPeople === "" || numPeople <= 1){
		numPeople = 1;

		document.getElementById("each").style.display = "none";
	
	}else{

		document.getElementById("each").style.display = "block";
	}

	// Do some math
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	//display tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}


//hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };