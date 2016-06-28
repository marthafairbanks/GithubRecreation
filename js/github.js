$(document).ready(function() {
	$("input").focus();

	$.ajax({ url: "https://api.github.com/users/marthafairbanks", success: function success(results) {
		var userArray = results;

		var userImage = results.avatar_url;
		
		var date = moment(results.created_at).format('MMMM DD,  YYYY');

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

	$.ajax({ url: " https://api.github.com/users/marthafairbanks/repos", success: function success(results) {
		var repoArray = results;

		function writeRepos(){
   			repoArray.forEach(function(results) {
			
			$(".repoContent").append('<article><div class = "repoStats"><span>' + results.language + 
			' &nbsp;&nbsp;<a href ="' + results.stargazers_url + '"><img src = "images/star.svg"> ' + 
			results.stargazers_count + '</a> &nbsp;&nbsp;<a href ="' + results.forks_url + 
			'"><img src = "images/git-branch.svg"> ' + 
			results.forks_count + '</a></span></div><div class = "repoDetails"><a href = "' + 
			results.html_url + '"><h3>' + results.name + '</h3></a><p class = "description">' + 
			results.description + '</p><p class = "updated">Updated ' + moment(results.updated_at).fromNow() +
			'</p></div></article>');
		}
   	);}
   			writeRepos();
	

	} 
	});
	
	$.ajax({ url: "  https://api.github.com/users/marthafairbanks/events", success: function success(results) {
		var activityArray = results;

		function writeActivity(){
   			activityArray.forEach(function(results) {

   			if (results.payload.ref_type === "branch") {
   				$(".publicActivity").append('<article class = "activity">' + 
   				'<img src = "images/git-branch-activity.svg"><a href = "https://github.com/' + 
   				results.actor.login + '"> ' + results.actor.display_login + '</a> created ' + 
   				results.payload.ref_type + ' <a href = "https://github.com/' + results.repo.name +
   				'/tree/' + results.payload.ref + '"><span class = "branchType">' + results.payload.ref +
   				'</span></a> at <a href = "https://github.com/' + results.repo.name + '">' + 
   				results.repo.name + '</a> <span class = "createdAgo">' + moment(results.created_at).fromNow() +
   				'</span></article>');	
   			}
 
   			else if (results.payload.ref_type === "repository") {
   				$(".publicActivity").append('<article class = "activity">' + 
   				'<img src = "images/repo-activity.svg"><a href = "https://github.com/' + 
   				results.actor.login + '"> ' + results.actor.display_login + '</a> created ' + 
   				results.payload.ref_type + ' <a href = "https://github.com/' + results.repo.name + '">' + 
   				results.repo.name + '</a> <span class = "createdAgo">' + moment(results.created_at).fromNow() +
   				'</span></article>');
   			}

   			else {

   				// var branch = results.payload.ref;
   				// var branchName = branch.slice(11);
   				// console.log (branchName);

	   			// var ref = results.payload.head;
	   			// var id = ref.slice(0, 6);
	   			// console.log (id);

   				$(".publicActivity").append('<article class = "pushEvent"><img class = "icon"' +
   				'src = "images/git-commit.svg"><p><span class = "createdAgo">' + 
   				moment(results.created_at).fromNow() +'</span><br><span class = "bold">' +
   				'<a href = "https://github.com/' + results.actor.login + '"> ' + 
   				results.actor.display_login + '</a> pushed to <a href = "https://github.com/' + 
   				results.repo.name + '/tree/' + results.payload.ref + '">' + ' branch' +
   				'</a> at <a href = "https://github.com/' + results.repo.name + '">' + 
   				results.repo.name + '</a></span><br><img class = "avatar" src = "' + results.actor.avatar_url + 
   				'"><img src = "images/octoface.svg"></p></article>');

   			}


   				
		}
   	);}
   			writeActivity();
	

	} 
	});

});		