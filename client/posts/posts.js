
// // HELPERS
	Template.posts.helpers({
		predictions : function() {
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

	Template.posts.events({
	'click .arrow-next' : function(event,template) {
		Session.set('offset',Number(Session.get('offset'))+5);
	},
	'click .arrow-prev' : function(){
		Session.set('offset',Number(Session.get('offset'))-5);
	}
	
	});