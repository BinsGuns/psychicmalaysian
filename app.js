Posts = new Meteor.Collection("posts");
Prediction = new Meteor.Collection("predictions");
News = new Meteor.Collection("news");
UserPoints = new Meteor.Collection("points");
UserRoles = new Meteor.Collection("userroles");

if(Meteor.isClient) {
	

//  load foundation JS
	Template.home.rendered = function() {
		$(document).foundation();
		$(".label").hide();

		$(".close-reveal-modal").click(function(){
			$(".label").hide();
		});

	};

// Open modal when /login-admin is rendered
	Template.loginadmin.onRendered(function(){
		$('#adminModal').foundation('reveal', 'open');
	});

	

}
	
if(Meteor.isServer) {
	
}