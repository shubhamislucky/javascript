document.write("<br>");
document.write("----Object and Properties----");
document.write("<br>");

//////////////////////////////////
// Object and Properties

// We have key-value pairs in Objects
var john = {
    name: 'John',
    lastName: 'smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

// ways of retrieving values from Objects
document.write(john.yearOfBirth);
document.write("<br>" + john['isMarried']);

// it is obvious that we can also do this
var xyz = 'job';
document.write("<br>" + john[xyz]);

console.log(john);

// overriting values
john.lastName = 'Miller';
john['job'] = 'Programmer';
john['favColor'] = 'Blue'; //can add new data like this
// favColor is not present so it creates it.

console.log(john);

// 2nd way to create Objects
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Austin';
jane.yearOfBirth = 1995;
jane.job = 'waitress';
console.log(jane);
