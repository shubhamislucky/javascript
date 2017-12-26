var age = 19;
var name = 'Lucky';

document.write('<br>');
document.write(name + age);

document.write('<br>');
document.write(age + age);

document.write('<br>');
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Birth Year of " + name + " is " + birthYear);

document.write('<br>');
document.write("Current year is " + currentYear);

document.write('<br>');
document.write("three times of age is " + age * 3);

document.write('<br>');
age++;
document.write("age after using increment operator is " + age);

document.write('<br>');
age *= 2;
document.write("age after using <i>age *= 2</i> is " + age);
