//create an array called family which has your family members in order of their age
var family = ['heidi', 'hailee', 'heather', 'robby', 'melanie', 'ryan', 'michelle'];
 



//Remove the oldest member of your family

family.shift();



//Add a new family member as the youngest member

family.push("bart");


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

for(var i = 0; i < family.length; i++){
	if(family[i] === "Tyler"){
		alert("I have a Tyler");
	}
	else{
		alert("Ain't no Tyler Here");
	}
}


// Remove the second oldest member of your family

  //Code here



//Write a function called 'reverse' that takes in a string and returns that string in reverse order

var reverse = function(string) {
	var newString = string.split('').reverse().join('');
}
reverse();

  //Call the function here