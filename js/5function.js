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
