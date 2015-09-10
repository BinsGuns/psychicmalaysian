	//  ADDING PREDICTIONS
	Template.addpredictions.events({
		'submit .add-prediction-form': function(event) {
			event.preventDefault();
			var title = event.target.title.value;
			var userObject = Meteor.users.findOne({_id:Meteor.userId()});
			var description = event.target.description.value;
			Prediction.insert({
				author: userObject.username,
				author_id: Meteor.userId(),
				createdAt : new Date(),
				title : title,
				content : description,
				status : 0,
				points: 0
			},function(error){
				if(error) {
					console.log(error.reason);
				} else {
					event.target.title.value = "";
					event.target.description.value="";
					$('.success-prediction').show();
				}
			});
		}
	});	
