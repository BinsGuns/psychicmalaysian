Template.profile.helpers({
	 userObject : function() {
	 	var user_id = Meteor.userId();
	 	return Meteor.users.findOne({_id:user_id});
	 }
});

Template.profile.events({
	'click .logout-user' : function(event) {
		Meteor.logout();
	}
});