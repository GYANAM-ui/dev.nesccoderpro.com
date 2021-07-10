function addMe() {
	username = document.getElementById('name').value;
	email = document.getElementById('email').value;
	comments = document.getElementById('msg').value;

	mails = 'mailto:nestcoderlive@gmail.com?Subject=Register to mentorship &body=' + username + " " + email +" " + comments;

	if (username, email == "") {
		document.getElementById('error_div').style.display = "block";
	} else {
		window.open(mails);
		document.getElementById('recieve').style.display = "block";
	}
}