
/********** BEGIN increment Problem **********/ 
var incrementValue = 5;
var incrementStop = 120;
var increment = 10;

var addNumber=""
var addResults=document.getElementById("increment")

for (var i = incrementValue; i < incrementStop; i+=increment) {
	console.log("Incremental value is ", i );
	addNumber= i;

	// for innerHTML practice 
	addResults.innerHTML += `<div>${"the number is " + addNumber}</div>`;
}


/********** BEGIN decrement Problem **********/
var decrementValue = 4096;
var decrementStop = 1;
var decrement = 2;

var theNumber= "";
var mathResults = document.getElementById("results");

for (var i = decrementValue; i >= decrementStop; i/=decrement) {
	console.log("Decremental value is ", i );
	theNumber = i;

	// for innerHTML practice 
	mathResults.innerHTML += `<div>${"the number is " + theNumber}</div>`;
}


/********** BEGIN ARRAY Iteration Problem **********/
var president = [
	"George Washington",
	"John Adams",
	"Thomas Jefferson",
	"James Madison",
	"James Monroe",
	"John Quincy Adams",
	"Andrew Jackson",
	"Martin Van Buren",
	"William H. Harrison",
	"John Tyler",
	"James K. Polk",
	"Zachary Taylor",
	"Millard Fillmore",
	"Franklin Pierce",
	"James Buchanan",
	"Abraham Lincoln",
	"Andrew Johnson",
	"Ulysses S. Grant",
	"Rutherford B. Hayes",
	"James A. Garfield",
	"Chester A. Arthur",
	"Grover Cleveland",
	"Benjamin Harrison",
	"Grover Cleveland",
	"William McKinley",
	"Theodore Roosevelt",
	"William H. Taft",
	"Woodrow Wilson",
	"Warren G. Harding",
	"Calvin Coolidge",
	"Herbert Hoover",
	"Franklin D. Roosevelt",
	"Harry S. Truman",
	"Dwight D. Eisenhower",
	"John F. Kennedy",
	"Lyndon B. Johnson",
	"Richard M. Nixon",
	"Gerald R. Ford",
	"Jimmy Carter",
	"Ronald Reagan",
	"George H. W. Bush",
	"Bill Clinton",
	"George W. Bush",
	"Barack H. Obama"];
var aPresident= "";
var presElement = document.getElementById("arrayIteration");

for (var i = 0; i < president.length; i++) {
	aPresident = president[i];
	console.log("President #" + (i+1) + " was " + president[i]);

	// for innerHTML practice 
	presElement.innerHTML += `<div>${"President #" + (i+1) + " was " + aPresident}</div>`;
}


/********** BEGIN OBJECT Iteration Problem **********/
var antSpecies = {
  argentEine: {asdf: "asdfasdfasdfasdf"},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}


var obj = { a:1, 
						b:2, 
						c:3
					};
    
for (var ant in antSpecies) {
  console.log("antSpecies." + ant + " = " + antSpecies[ant]);
}
	console.log("Here are my F MY I logs:");
  console.log(antSpecies);
  console.log(antSpecies.argentEine);
  console.log(antSpecies.argentEine.asdf);
  // more specific as dot notation gets more specific

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// for ( var i = 0 ; i <= antSpecies ; i++ ) {
// 	var aSpecies = antSpecies[i];
// 	console.log(aSpecies[i]);
// }




// // SIMPLE VERSIONS/Off the dome run throughs of 1, 2, & 3 Exercises
// console.log("Below are just practice workthroughs I did");

// // Increment by 10
// var countVar = 5;
// var increVar = 10;
// var maxVar = 120;
// for (var i = countVar; i < maxVar; i+=increVar) {
// 	console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA= ", i );
// }
	
// // Division by 2
// var theNum = 4096;
// for (i = theNum; i >= 1; i/=2) {
// 	console.log("asdfasdfasdfklasdflkjasd fklj", i );
// } 

// // Presidents
// var thePresident = [
// 	"George Washington",
// 	"John Adams",
// 	"Thomas Jefferson",
// 	"James Madison",
// 	"James Monroe",
// 	"John Quincy Adams",
// 	"Andrew Jackson",
// 	"Martin Van Buren",
// 	"William H. Harrison"];

// for (var i = 0; i < thePresident.length; i++) {
// 	console.log("President number " + (i+1) + " was " + thePresident[i]);
// }