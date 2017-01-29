//function add(a, b) {
//    return a + b;
//}
//
//console.log(add(2, 3));
//
//var toAdd = [9, 5];
//
//console.log(add(...toAdd));

//var groupA = ['jen', 'Cory'];
//var groupB = ['Vikram'];
//var final = [3,...groupA];
//
//console.log(final);

var person1 =['Andrew', 25];
var person2 =['Jen', 29];
// Hi Andrew, you ar 25

function greet(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

greet(...person1);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Jarek', ...names];
// Hi Jarek

final.forEach(function (name) {
   console.log('Hi '+ name);
});