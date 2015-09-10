// EVENTS
	Template.innerSignupModal.events({
		'submit .sign-up-form': function(event) {
			var username = event.target.username.value;
			var password = event.target.password.value;
			var email = event.target.email.value;	
			var profileObject = {
				createdAt : new Date(),
			};

			Accounts.createUser({
				username:username,
				password:password,
				email : email,
				profile: profileObject},

			function(error,result) {
				if(error) {
					$(".label").show();
					$(".label-wrapper").addClass("alert");
					$(".label-wrapper").text(error.reason);
				} else {
					$(".label").show();
					$(".label-wrapper").addClass("success");
					$(".label-wrapper").text("Registered Successfully");
					var userId = Meteor.userId();
					var userInfo = Meteor.users.findOne({_id:userId});
					console.log(userId+ userInfo);
					UserRoles.insert({user_id:userId,roles:0});
					UserPoints.insert({user_id:userId,points:0});
					event.target.username.value = "";
					event.target.password.value = "";
					event.target.email.value = "";
				}
			});
			return false;
		}
	});
