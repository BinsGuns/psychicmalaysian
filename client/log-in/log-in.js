//  LOGIN FUNCTION FOR USERS
	Template.innerLoginModal.events({
		'submit .login-form': function(event) {
			var username = event.target.username.value;
			var password = event.target.password.value;
			Meteor.loginWithPassword(username,password,
			function(error,result) {
				if(error) {
					$(".label").show();
					$(".label-wrapper").text(error.reason);
					event.target.username.value = "";
					event.target.password.value = "";
				} else {
					$("#loginModal").foundation('reveal','close');
					event.target.username.value = "";
					event.target.password.value = "";
					FlowRouter.go("/profile/"+Meteor.userId());
				}
			})
			return false;
		}
	});
