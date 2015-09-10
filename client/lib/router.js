FlowRouter.notfound = {
	action : function() {
		BlazeLayout.render('notfound');
	}
}

FlowRouter.route('/',{
	action: function() {
		BlazeLayout.render('home',{posts:'posts'});
	}
});

FlowRouter.route('/home',{
	action: function() {
		BlazeLayout.render('home',{posts:'posts'});
	}
});

FlowRouter.route('/admin',{
	action: function (params) {
		BlazeLayout.render('admin', {content:'adminHome'});
	}
});


FlowRouter.route('/user-list',{
	action: function () {
		BlazeLayout.render('admin', {content:'userslist'});
	}
});


FlowRouter.route('/remove-prediction',{
	action: function() {
		BlazeLayout.render('admin', {content:'removePredictionList'})
	}
});

FlowRouter.route('/loginadmin',{
	action: function() {
		BlazeLayout.render('home',{content:'loginadmin',posts:'posts'});
	}
});



FlowRouter.route('/news',{
	action: function() {
		BlazeLayout.render('home',{content:'news'});
	}
});

FlowRouter.route('/add-news',{
	action: function() {
		BlazeLayout.render('admin',{content:'addnews'});
	}
});

FlowRouter.route('/profile/:user_id',{
action: function() {
		BlazeLayout.render('profile',{content:'prediction-list'});
	}
});

FlowRouter.route('/add-points',{
	action : function() {
		BlazeLayout.render('admin', {content:'addPoints'});
	}
});

FlowRouter.route('/add-prediction',{
	action: function() {
		BlazeLayout.render('profile', {content:'addpredictions'})
	}
});


FlowRouter.route('/login/error',{
action: function(params) {
		BlazeLayout.render('login',{data:'params'});
	}
});