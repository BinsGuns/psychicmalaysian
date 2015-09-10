Session.setDefault('offset',0);
Session.setDefault('limit',5);

Meteor.autorun(function(){
	Meteor.subscribe('predictions',Session.get('offset'));
	Meteor.subscribe('points');
	Meteor.subscribe('userroles');
	Meteor.subscribe('users');
});

Meteor.methods({
		predictionCount : function() {
			return Prediction.find().count();
	}
});