//Create an function called user which has the following properties
//username, email, password, birthday

var user = function() {
	return {
		username: 'Tyler',
		email: 'tyler@southpark.com',
		password: 'kenny',
		birthday: '7/4/90'
	}
};

//edit the username to be 'js_slinger'
  var user1 = user();

  user1.username = "js_slinger";

//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

user1.favoriteBook = "Mike Tyson learns to Whistle";

//Remove the password property from your object
  
delete user1.password;


//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

var values [];
	for(var key in user1) {
		values.push(user1[key]);
	}4