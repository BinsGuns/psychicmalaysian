
Meteor.startup(function () {
  UploadServer.init({
  	tmpDir:  '../../../../../.uploads/tmp',
    uploadDir: '../../../../../public/images/',
    checkCreateDirectories: true, //create the directories for you
    getDirectory: function(fileInfo, formData) {
    	// console.log(process.cwd());
      // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
      return '/uploads';
    },finished: function(fileInfo, formFields) {
      // perform a disk operation
     
      return false;
    },
    mmimeTypes: {
       "jpeg": "image/jpeg",
 		   "jpg": "image/jpeg",
	     "png": "image/png"
    }
  });

});

Meteor.publish('predictions',function(offset){
		return Prediction.find({},{limit:5,skip:offset});
 });

Meteor.publish('points',function(offset){
		return UserPoints.find({});
});
Meteor.publish('userroles',function(offset){
		return UserRoles.find({});
});

Meteor.publish('users',function(){
		return Meteor.users.find({});
});

Meteor.methods({
		predictionCount : function() {
			return Prediction.find().count();
	}
});