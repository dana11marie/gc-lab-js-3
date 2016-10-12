// arrays
var students = ["Gao", "Hilary", "Paulette"];
console.log(students.length);

students = ["Gao", "Hilary", "Paulette", "Jade"];
console.log(students.length);

students[4] = "Dana";
console.log(students.length);
console.log(students);

var name = "Dana";
console.log(name.length);

// methods - are a different type of Function
 var rainbow = ["red", "orange", "yellow", "green", "blue"];
 var last = rainbow.pop();
 console.log(rainbow);
 console.log(last);
 rainbow.pop();
 console.log(rainbow);

var rainbow = ["red", "orange", "yellow", "green", "blue"];
rainbow.forEach(function(element, index, array){
console.log(element, index, array);
});

var myInfo = {
name: 'James',
age: 36,
married: true,
likes: ['Mythbusters', 'Jim Butcher', 'JavaScript'], family: [
{
name: "Rebecca", relation: "spouse"
},
{
name: "Evangeline", relation: "daughter"
},
{
name: "Josephine", relation: "daughter"
}, ],
listFamilyMembers: function() { } };

var name = myInfo.name;
var age = myInfo.age;
var maritalStatus = myInfo.married;
var familyMembers = myInfo.listFamilyMembers();

console.log(name);
console.log(age);
console.log(maritalStatus);
console.log(familyMembers);

// LAB 3 - shopping list with objects and arrays

var groceryList = [
	{name: "apples", price: 2},
	{name: "grapes", price: 4},
	{name: "chicken", price: 8},
	{name: "potatoes", price: 1},
	{name: "carrots", price: 3}
	];

var total = 0;

groceryList.forEach(function(element){
	console.log(element.name + " " + element.price);
	total += element.price;
});

console.log(total);
