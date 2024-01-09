//leaflets script
var map = L.map('map').setView([4.902909, 7.001263], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Contact form.js 
function validate() { 
	let firstname = 
		document.getElementById("firstname").value; 
    let lastname = 
		document.getElementById("lastname").value; 
	let phone = 
		document.getElementById("phone").value; 
	let email = 
		document.getElementById("email").value; 
	let message = 
		document.getElementById("message").value; 
	let error_message = 
		document.getElementById("error_message"); 

	error_message.style.padding = "10px"; 

	let errors = []; 

	if (firstname.length < 2) { 
		errors.push("Please Enter a valid Name");} 
    if (lastname.length < 2) { 
            errors.push("Please Enter a valid Name");} 
	if (isNaN(phone) || phone.length != 11) { 
		errors.push("Please Enter a valid Phone Number");} 
	if (email.indexOf("@") == -1 || email.length < 6) { 
		errors.push( 
			"Please Enter a valid Email");} 
	if (message.length <= 10) { 
		errors.push( 
			"Please Enter More Than 10 Characters");} 

	if (errors.length > 0) { 
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else { 
		alert( 
			"Form Submitted Successfully!"); 
		return true;}}

