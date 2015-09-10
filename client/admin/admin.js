
//  LOGIN FUNCTION FOR ADMIN
	Template.innderLoginAdminModal.events({
		'submit .login-form-admin': function(event) {
			var username = event.target.username.value;
			var password = event.target.password.value;
			Meteor.loginWithPassword(username,password,
			function(error) {
				if(error) {
					$(".label").show();
					$(".label-wrapper").text(error.reason);
					event.target.username.value = "";
					event.target.password.value = "";
				} else {
					var id = Meteor.userId();
					var userRoles = UserRoles.findOne({user_id:id});
					if(userRoles.roles != 1){
						$(".label").show();
						$(".label-wrapper").text("Youre role is not admin");
					} else {
						FlowRouter.go("/admin");
				 		 $("#adminModal").foundation('reveal','close');
					}
				}
			})
			return false;
		}
	});

Template.addPoints.helpers({
	approvedPredictions : function() {
		Meteor.call("predictionCount",function(error,result){
				console.log(Number(Session.get('offset')));
				if(result > Number(Session.get('limit')) ){
					 $(".arrow-next").show();
				} else {

					$(".arrow-next").hide();
				}
				if(Number(Session.get('offset')) > result) {
					$('.arrow-next').hide();
				}
				if(Number(Session.get('offset')) === 0) {
					$('.arrow-prev').hide();
				} else {
					$('.arrow-prev').show();
				}
			});
		return Prediction.find({});
	} 
});

Template.addPoints.events({
	'click .add-points' : function(event) {
		// update for userPoints points
		var prediction_id = $(event.currentTarget).attr('predictionid');
		var author_id = event.currentTarget.id;
		var user_points = UserPoints.findOne({user_id:author_id});
		UserPoints.update({_id:user_points._id},{$inc:{points:1}});
		// update points in prediction
    	 var prediction = Prediction.update({_id:prediction_id},{$inc:{points:1}});
		 event.currentTarget.text = "Points Added";
	},'click .arrow-next' : function(event,template) {
		Session.set('offset',Number(Session.get('offset'))+5);
	},
	'click .arrow-prev' : function(){
		Session.set('offset',Number(Session.get('offset'))-5);
	}

});

Template.removePredictionList.helpers({
		predictionList : function() {
			Meteor.call("predictionCount",function(error,result){
				console.log(Number(Session.get('offset')));
				if(result > Number(Session.get('limit')) ){
					 $(".arrow-next").show();
				} else {

					$(".arrow-next").hide();
				}
				if(Number(Session.get('offset')) > result) {
					$('.arrow-next').hide();
				}
				if(Number(Session.get('offset')) === 0) {
					$('.arrow-prev').hide();
				} else {
					$('.arrow-prev').show();
				}
			});
			return Prediction.find({});
		}
});

Template.removePredictionList.events({
	'click .pending-prediction' : function(event) {
		var user_id = event.currentTarget.id;
		Prediction.remove({_id:user_id});
	}
})

Template.userslist.helpers({
	users : function() {
		return Meteor.users.find({});
	},userPoints : function(userid) {
 		var user_points = UserPoints.findOne({user_id:userid});
 		return user_points.points;
		
	},userLevel : function(userid) {
		var user_points = UserPoints.findOne({user_id:userid});
 		var level = (user_points.points/5);
 		var converted = Math.floor(level);
 		return converted;
	}
});

Template.removePredictionList.events({
		'click .arrow-next' : function(event,template) {
			Session.set('offset',Number(Session.get('offset'))+5);
			
			},
			'click .arrow-prev' : function(){
				Session.set('offset',Number(Session.get('offset'))-5);
			}
		});
			
Template.admin.helpers({
		pathForUsers : function() {
			var path = FlowRouter.path('/user-list');
			return path;
		},
		pathForAddPoints: function(){
			var path = FlowRouter.path('/add-points');
			return path;
		},
		pathForPendingList: function() {
			var path = FlowRouter.path('/remove-prediction');
			return path;
		},
		pathForAddNews : function () {
			var path = FlowRouter.path('/add-news');
			return path;
		}
	});

Template.admin.events({
	'click .log-out-user': function(){
		FlowRouter.go("/");
	}
});