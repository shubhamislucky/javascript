document.write("<br>");
document.write("----If-Else statement----");
document.write("<br>");

//////////////////////
// Declaring variables
var name = 'Prashant';
var age = 19;
var isMarried = 'no';

if(isMarried === 'yes'){
    document.write(name + ' is married!');
}else{
    document.write(name + ' will hopefully marry soon :)');
}
document.write("<br>");

// if-else statement wants a true or false value
var isMarried = true;

if(isMarried){
    document.write(name + ' is married!');
}else{
    document.write(name + ' will hopefully marry soon :)');
}

document.write("<br>");
// let's see type coersion, double equal and triple equal
if(23 == "23"){
    document.write("This is not looking good to me!");
}
document.write("<br>");

if(23 === "23"){
    document.write("It should work now.");
}else{
    document.write("Now this is much better.");
}

// always try to use the tripel equal === operator while comparing :)
