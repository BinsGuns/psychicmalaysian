Template.news.helpers({
	news : function() {
		return News.find({});
	}

});

Meteor.startup(function() {
    Uploader.finished = function(index, fileInfo, templateContext) {
     // console.log(fileInfo.url);
    // Uploads.insert(fileInfo);
    //templateContext.preventDefault();
    return false;
  };
})

Template.customUpload.created = function() {
  Uploader.init(this);
}

Template.customUpload.rendered = function () {
  Uploader.render.call(this);
};

Template.customUpload.helpers({
  'infoLabel': function() {
    var instance = Template.instance();

    // we may have not yet selected a file
    var info = instance.info.get()
    if (!info) {
      return;
    }

    var progress = instance.globalInfo.get();

    // we display different result when running or not
    return progress.running ?
      info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
      info.name + ' - ' + info.size + 'B';
  },
  'progress': function() {
    return Template.instance().globalInfo.get().progress + '%';
  }
})

Template.customUpload.events({
  'submit .imageform': function (e) {
    Uploader.startUpload.call(Template.instance(),e.preventDefault());
    return false;
  }
});


Template.addnews.events({
	'click .submit-prediction' : function(event) {

		var title = $("input[name=title]").val();
		var description = $("textarea[name=description]").val(); 
		
		News.insert({
			title:title,
			description:description,
			createdAt : new Date()
		});

		$("input[name=title]").val("");
		$("textarea[name=description]").val(""); 
		$('.success-prediction').show();
	}
	
 });