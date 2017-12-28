document.write("<br>");
document.write("----Functions----");
document.write("<br>");

////////////////////////
// Functions

function calculateAge(yearOfBirth){
    var age = new Date().getFullYear() - yearOfBirth;
    return age;
}
var ageMonty = calculateAge(1994);
var ageMichael = calculateAge(1990);
document.write("Age of Monty is " + ageMonty);
document.write("<br> Age of Michael is " + ageMichael);

function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    document.write("<br>" + name + " will retire in " + retirement + " years.");
}
yearsUntilRetirement('John', 1990);

//////////////////////////////////////////
// Fucntion expression and statement

// Fucntion statement
function hello1(arg){
    // code
}

// Function expression
var hello2 = function(arg){
    // code
}

/* The difference between funtion statement and function expression
    is that function expression produces immediate result(value) while
    statement just performs an action.
*/

// Examples
function haveFun(age){
    if(age > 20){
        document.write("<br>Your age is greater than 20.");
    }else{
        document.write("<br>Your age is less than 20.");
    }
}
haveFun(43);

var someFun = function(x,y){
    var z = x+y;
    return z;
}
document.write("<br>" + someFun(3,4));
