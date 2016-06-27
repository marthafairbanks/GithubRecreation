$(document).ready(function() {
	$("input").focus();

	$.ajax({ url: "https://api.github.com/users/marthafairbanks", success: function success(results) {
		var userArray = results;

		var userImage = results.avatar_url;
		
		var date = moment(results.created_at).format('MMMM DD,  YYYY');
		console.log(date);

		//writes the menu avatar pic
		$(".rightIcons").append('<img alt="@marthafairbanks" class="avatar" src=' + userImage +
		 '"><img class = "triangle" src = "images/triangle-down.svg">');
		//writes the user info on left 
		$(".userInfo").append('<img alt="@marthafairbanks" class="profilePic" src=' + userImage +
		 '">' + '<h3>' + results.name + '</h3>' + '<h4>' + results.login + '</h4><p><span class = "newBox">' + 
		 'new</span> <a href = "https://github.com/settings/profile?focus_bio=1">Add a bio</a></p>' + 
		 '<div class = "emailJoined"><img class = "mailIcon" src = "images/mail.svg">' + " " + 
		 '<a href = "mailto:' + results.email + '"	">' + results.email + '</a>' + 
		 '<br><img class = "clockIcon" src = "images/clock.svg">' + " Joined on " + date + '</div>' +
		 '<div class = "followersLine"><span class = "followers"><a href = "https://github.com/' +
		 results.login + '/followers"><h3>' + results.followers + '</h3></a></span>' + 
		 '<span class = "stars"><a href = "https://github.com/stars/' + results.login + 
		 '""><h3>0</h3></a></span>' + '<span class = "following"><a href = "https://github.com/' +
		 results.login + '/following"><h3>' + results.following + '</h3></a></span><br>' + 
		 '<span class = "followersText"><a href = "https://github.com/' +
		 results.login + '/followers">Follower</a></span><span class = "starsText">' + 
		 '<a href = "https://github.com/stars/' + results.login + '"">Starred</a></span>' + 
		 '<span class = "followingText"><a href = "https://github.com/' + results.login + 
		 '/following">Following</a></span></div>');

	} 

	});
});		