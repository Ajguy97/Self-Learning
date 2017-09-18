// A method is just a property thats a function inside an object

// adding methods to an object.
// eg.

var Dog = 
{
	name : "max",
	speak : function(){
		console.log("Woof");
	}
}

Dog.speak();

var Cat = 
{
	name :"i hate cats",
	speak : function(){
		console.log("Cats are evil!");
	}
}

Cat.speak()



// the keyword this

var comments = 
{
	data: ["Comment1", "Comment2" , "Comment3"],


	// initializing method inside the object

	
	print : function(){
		this.data.forEach(function(el){
			console.log(el);
		})
	}
}