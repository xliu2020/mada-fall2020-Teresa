var myObject = {
    firstName:"Rob",
    lastName:"Smith",
    address:"123 Main St.",
    age:45,
    title:"Engineer"
};
//good st holding datas related for each other

var myArray = ["Rob","Smith", "123 Main St.",45,"Engineer"];


var months = {
    firstMonth: "January",
    secondMonth: "February"
}

var myEmployees = [];

myEmployees.push(myObject);

mySecondEmployee = {
    firstName: "Dan",
    lastName:'Lincoln',
    address:"123 4th St.",
    age:32,
    title:"CEO"
};

myEmployees.push(mySecondEmployee);

console.log(myEmployees);

var totalAges = 0;

for (var i =0; i < myEmployees.length; i =i+1) {
    totalAges =totalAges + myEmployees[i].age;
}

var averageAge = totalAges / myEmployees.length;

console.log(averageAge);
