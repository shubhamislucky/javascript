document.write("<br>");
document.write("----Arrays----");
document.write("<br>");

///////////////////////////
// Arrays

// two types of array declaration
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1994, 1996);

document.write(names[0] + " : " + years[0]);
names[1] = 'Justin';
document.write("<br>" + names[1]);

// can use different data types in a single Array
var John = ['John', 'Smith', 1990, 'coder', false];
document.write("<br>" + John + "<br>");

John.push('blue'); // adds an element to the last of array
document.write(John);

John.unshift('Mr.');
document.write("<br>" + John); // adds an element to the beginning of the array

John.pop(); // removes an element from last & returns the popped element
John.shift(); // removes an element from the beginning
John.indexOf('teacher'); // returns the index of the element

/* Index of returns -1 if the element is not present.
    We can use it to check whether an element is present
    in the array or not.
*/
