Template.header.helpers({
		pathForHome: function(){
			var path = FlowRouter.path('home');
			return path;
		},
		pathForNews: function(){
			var path = FlowRouter.path('news');
			return path;
		}
	});

	Template.profile.helpers({
		pathForAddPrediction: function() {
			var path = FlowRouter.path('/add-prediction');
			return path;
		}
	});
