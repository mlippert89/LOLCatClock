var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 7;
var lunchTime = 12;
var partyTime = 21; // 9PM
var napTime = 15; // 3PM


var updateClock = function() {

	
	var lolcat = document.getElementById("lolcat");
	var message = document.getElementById("timeEvent");
	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	
	if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "Raise the Roof!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "Catch some Z's!";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "Nom nom nom!";
	} else if (time == wakeUpTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "Rise & Shine!";
	} else if (time < noon) {
		messageText = "Good Morning!";
	} else if (time > evening) {
		messageText = "Good Evening!";
	} else {
		messageText = "Good Day!";
	} 

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
};

/*CLOCK CODE*/

var showCurrentTime = function() {
	//display clock string on webpage
	var clock = document.getElementById("clock");

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	//Set Hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon) //negates military time
	{
		hours = hours - 12;
	}

	//Set Minutes
	if (minutes < 10) //formats proper minute display
	{
		minutes = "0" + minutes;
	}

	//Set Seconds
	if (seconds < 10) //formats proper second display
	{
		seconds = "0" + seconds;
	}

	//Put together strong that displays the clock
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};


/*END CLOCK CODE*/


updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


/*Event Listener Links*/

var partyTimeButton = document.getElementById("partyTimeButton");
//set isPartyTime to false
var isPartyTime = false;

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

/*Event-Based Functions*/


var partyEvent = function() {

	//check isPartyTime
	if (isPartyTime === false) {
		
		//if isPartyTime is false, change it to true
		//so we know the button has been clicked
		isPartyTime = true;
		
		//set time to isPartyTime so the lolCat Clock
		//image and message update to isPartyTime
		time = partyTime;

		//changes button text
		partyTimeButton.innerText = "PARTY OVER";
		//changes button color
		partyTimeButton.style.backgroundColor = "#222";


	} else {
		
		//if isPartyTime is true, change it to false
		isPartyTime = false;

		//set time back to current time
		time = new Date().getHours();

		//changes button text
		partyTimeButton.innerText = "PARTY TIME!";
		//changes button color
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	}

};

var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};

/*Event Listeners*/

partyTimeButton.addEventListener('click', partyEvent);

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);