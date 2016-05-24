
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

for (var i = 1; i < president.length; i++) {
	aPresident = president[i];
	console.log("President #" + i + " was " + president[i]);

	// for innerHTML practice 
	presElement.innerHTML += `<div>${"President #" + i + " was " + aPresident}</div>`;
}


/********** BEGIN OBJECT Iteration Problem **********/


