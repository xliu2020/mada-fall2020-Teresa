// while loop

if (true) {

}

var counter = 0;
while (counter < 10) {
    console.log("Running");

    counter = counter + 1;
}

while (false) {

}

do {
    // This line will always run at least 1 time. because we execute the code first and then we check the condition.
} while (false);

// for loop

i++;

for (var i=0; i < 10; i = i + 1) {
    console.log("Running");
    console.log(i)
}

// shorthands
/*var somenUMBER = 10;

someNumber++; //
someNumber+= 2;
someNumber -= 2;
someNumber /= 3;
someNumber *= 3;
*/
for(i = 0; i<10; i = i + 1) {
    if (i == 6) {
        break;
    }
    console.log("running")
}