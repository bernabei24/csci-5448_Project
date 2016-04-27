// This is the list of all js functions that buttons use to submit data. Right now they print the data, instead, we can package it to something else

// buttom submits linkedin and email on add mentor page
$(function() {
	$('#addLinkedinBtn1').click(function() {
		var properties = {};
		properties.linkedinUrl = $("#inputLinkedin1").val();
		properties.email = $("#inputEmail1").val();

		console.log(properties);

	});
});

// button submits individual information on add mentor page

$(function() {
	$('#addMentorBtn1').click(function() {
		var properties = {};
		properties.name = $("#inputName1").val();
		properties.email = $("#inputEmail2").val();
		properties.linkedinUrl = $("#inputLinkedin2").val();
		properties.role = $("#inputRole1").val();
		properties.location = $("#inputLocation1").val();
		properties.bio = $("#inputBio1").val();
		properties.skills = $("#inputSkills1").val();
		properties.notes = $("#inputNotes1").val();
		properties.photo = $("inputPhoto1").val();

		console.log(properties);

	});
});


// Submit Button adds feedback to mentor on profile page

$(function() {
	$('#addFeedbackBtn1').click(function() {
		var properties = {};
		properties.name = $("#inputName3").val();
		properties.date = $("#inputDate1").val();
		properties.rating = $("#inputRating").val();
		properties.comment = $("#inputComment1").val();

		console.log(properties);

	});
});

// button submits individual information on the individual mentor page

$(function() {
	$('#editMentorBtn').click(function() {
		var properties = {};
		properties.name = $("#inputName2").val();
		properties.email = $("#inputEmail3").val();
		properties.linkedinUrl = $("#inputLinkedin3").val();
		properties.role = $("#inputRole2").val();
		properties.location = $("#inputLocation2").val();
		properties.skills = $("#inputSkills2").val();
		properties.leadMentee = $("#inputLeadMentee");
		properties.mentee = $("#inputMentee");
		properties.bio = $("#inputBio2").val();
		properties.notes = $("#inputNotes2").val();
		properties.photo = $("inputPhoto2").val();

		console.log(properties);

	});
});

